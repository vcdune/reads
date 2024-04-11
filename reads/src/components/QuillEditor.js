import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import firebaseConfig from "./firebaseConfig";

const QuillEditor = ({ content }) => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [documentTitle, setDocumentTitle] = useState("");
  // const [documentSlug, setDocumentSlug] = useState("");

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      // Set placeholder text
      quillInstance.current.clipboard.dangerouslyPasteHTML(
        1,
        "<h3>Start Writing...</h3>"
      );

      // Handle focus event to remove placeholder
      quillInstance.current.on("text-change", () => {
        const placeholder = editorRef.current.querySelector(".ql-placeholder");
        if (placeholder) {
          placeholder.style.display =
            quillInstance.current.getLength() > 1 ? "none" : "block";
        }
      });
    }
  }, []);

  const saveToFirebase = async () => {
    const content = quillInstance.current?.root.innerHTML;
    const user = firebase.auth().currentUser;
  
    if (!user) {
      console.warn("User not logged in. Content not saved.");
      return;
    }
  
    const userID = user.uid;
  
    if (content && documentTitle.trim() !== "") {
      const db = firebase.firestore();
      const displayName = user.displayName || "Anonymous";
      const currentDate = new Date().toLocaleDateString();
  
      // Get the file input element
      const fileInput = document.getElementById("formFile");
      const file = fileInput.files[0];
  
      // Reference to Firebase Storage
      const storageRef = firebase.storage().ref();
  
      // Upload the file to Firebase Storage
      const fileSnapshot = await storageRef.child(`${userID}/${file.name}`).put(file);
      const fileURL = await fileSnapshot.ref.getDownloadURL();
  
      // Save document content to Firestore
      const editorContentRef = db.collection("editorContent").doc();
  
      await editorContentRef.set({
        userID,
        author: displayName,
        documentTitle,
        thumbnailURL: fileURL,
        content,
        date: currentDate,
      });
  
      console.log("Content saved to Firebase successfully");
      window.location.href = "/home";
    } else {
      console.warn("Content or document title is empty. Nothing to save.");
      window.confirm(
        "Content or document title is empty. Please provide a title, URL slug, and content for your page."
      );
    }
  };

  return (
    <div div style={{ maxWidth: "1250px", margin: "auto", padding: "20px" }}>
      <div class="input-group mb-3" style={{ maxWidth: "100%" }}>
        {/* <a class="btn btn-dark" type="button" id="button-addon2" href="/home">
          ↩
        </a> */}
        <input
          type="text"
          className="form-control"
          placeholder="Document Title"
          aria-label="Document Title"
          value={documentTitle}
          onChange={(e) => setDocumentTitle(e.target.value)}
        />
        <button
          className="btn btn-dark"
          type="button"
          id="button-addon2"
          onClick={saveToFirebase}
        >
          Publish
        </button>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Thumbnail
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div
        ref={editorRef}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default QuillEditor;
