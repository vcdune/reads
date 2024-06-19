import React, { useState } from "react";
import "react-quill/dist/quill.bubble.css"; // Import the Bubble theme's CSS
import ReactQuill from "react-quill";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "./firebaseConfig";

const QuillEditor = () => {
  const [editorContent, setEditorContent] = useState("");
  const [documentTitle, setDocumentTitle] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }],
      [{ list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      // [{ 'script': 'sub'}, { 'script': 'super' }],
      // [{ 'color': [] }, { 'background': [] }],
      // [{ 'align': [] }],
      ["link", "image"],
      // ["clean"],
    ],
  };

  const saveToFirebase = async () => {
    const user = firebase.auth().currentUser;

    if (!user) {
      console.warn("User not logged in. Content not saved.");
      return;
    }

    const userID = user.uid;

    if (editorContent && documentTitle.trim() !== "") {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

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
        content: editorContent,
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
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <button
        type="button"
        id="button-addon2"
        onClick={saveToFirebase}
        className="post-button"
      >
        <span style={{ marginRight: "5px" }}>Post</span>
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <input
        type="text"
        className="title-input form-control"
        placeholder="Title (will be displayed on page)"
        aria-label="Title"
        value={documentTitle}
        onChange={(e) => setDocumentTitle(e.target.value)}
        style={{
          backgroundColor: "#0000",
          border: "0px solid #0000",
          fontSize: "24px",
        }}
      />
      <ReactQuill
        className="editor"
        value={editorContent}
        onChange={handleEditorChange}
        theme="bubble"
        placeholder="Write your mind..."
        modules={modules}
      />
    </div>
  );
};

export default QuillEditor;
