import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "./firebaseConfig";

const QuillEditor = ({ content }) => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [documentTitle, setDocumentTitle] = useState("");

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

      // Save document content to Firestore
      const editorContentRef = db.collection("editorContent").doc();

      await editorContentRef.set({
        userID,
        author: displayName,
        documentTitle, // Include the document title
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
    <div style={{ maxWidth: "1250px", margin: "auto", padding: "20px" }}>
      <div className="input-group mb-3" style={{ maxWidth: "100%" }}>
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
      <div
        ref={editorRef}
        style={{
          maxWidth: "100%", // Adjusted maxWidth property
          height: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default QuillEditor;
