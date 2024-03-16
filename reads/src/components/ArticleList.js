import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // Import only firebase/app if using version 9
import "firebase/compat/firestore";

export default function ArticleList() {
  const [documents, setDocuments] = useState([]);
  const db = firebase.firestore();

  const fetchDocuments = async () => {
    try {
      const querySnapshot = await db.collection("editorContent").get();

      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDocuments(documentsData);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div>
      <div className="documentList">
        <ul className="post">
          {documents.map((document) => (
            <li key={document.id}>
              <p>{document.documentTitle}</p>
              <p>{document.author}</p>
              <p>{document.date}</p>
              <p>{document.preview}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
