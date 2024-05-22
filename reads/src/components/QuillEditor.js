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
            [{ header: 1 }, { header: 2 }, { header: 3 }],
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
        0,
        "<p>This is your page, get started by writing...</p>"
      );

      // Handle focus event to remove placeholder
      quillInstance.current.on("text-change", () => {
        const placeholder = editorRef.current.querySelector(".ql-placeholder");
        if (placeholder) {
          placeholder.style.display =
            quillInstance.current.getLength() > 1 ? "none" : "block";
        }
      });

      // Customize font size for paragraphs
      const sizeStyle = Quill.import('attributors/style/size');
      sizeStyle.whitelist = ['14px'];
      Quill.register(sizeStyle, true);
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
        authorImage: user.photoURL,
        documentTitle,
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
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", }}>
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
          backgroundColor: "white",
          maxWidth: "100%",
          height: "70vh",
          border: "1px solid #c7c7c7",
        }}
      />
    </div>
  );
};

export default QuillEditor;
