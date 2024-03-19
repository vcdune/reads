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
            Community Latest.{" "}
            <a href="https://dune-terminal.vercel.app/" className="keyterm">
              Dune Terminal now open.
            </a>
          </h4>
          {documents
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((document) => (
              <li key={document.id} className="document-item">
                <p>
                  <strong>
                    {document.genre}{" "}
                    <span className="document-date">{document.date}</span>
                  </strong>
                </p>
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
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
