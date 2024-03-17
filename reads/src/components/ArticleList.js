import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom";

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
          <h4 className="document-item">
            The Latest from Project Dune.{" "}
            <a href="" className="keyterm">Apply to be a writer.</a>
          </h4>
          {documents.map((document) => (
            <li key={document.id} className="document-item">
              <p className="keyterm">{document.genre}</p>
              <img
                src={document.imageURL}
                alt={document.documentTitle}
                className="document-image"
              />
              <div className="document-info">
                <Link className="document-title" to={`/pages/${document.id}`}>
                  <strong>{document.documentTitle}</strong>
                </Link>
                <p className="document-preview">{document.preview}</p>
                <p className="document-date">{document.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
