import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



const DocumentList = ({ userID }) => {
  const [documents, setDocuments] = useState([]);
  const db = firebase.firestore();

  const fetchDocuments = async () => {
    const querySnapshot = await db
      .collection("editorContent")
      .where("userID", "==", userID)
      .get();

    const documentsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setDocuments(documentsData);
  };

  const handleDelete = (documentId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this page?"
    );
    if (isConfirmed) {
      const documentRef = db.collection("editorContent").doc(documentId);

      documentRef
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          fetchDocuments();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    } else {
      console.log("Deletion canceled");
    }
  };

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, "");
  };

  useEffect(() => {
    fetchDocuments();
  }, [userID]);

  return (
    <div>
      {documents.length === 0 ? (
        <p>
          No documents found. <a href="/editor">Start writing.</a>
        </p>
      ) : (
        <div className="documentList">
          <h4 style={{ fontSize: "18px" }}>Your Pages</h4>
          <ul className="post">
            {documents.map((document) => (
              <li key={document.id} style={{ marginBottom: "4%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link to={`/pages/${document.id}`}>
                    <strong
                      style={{
                        fontSize: "0.7em",
                        color: "black",
                      }}
                    >
                      {document.documentTitle}
                    </strong>
                  </Link>
                  <div style={{ marginLeft: "10px" }}>
                    <button
                      onClick={() => handleDelete(document.id)}
                      className="minimalButton"
                    >
                      Delete
                    </button>
                    <Link to={`/edit`} className="minimalButton">
                      Edit
                    </Link>
                  </div>
                </div>
                {/* <p>{removeHtmlTags(document.content.substring(3, 170))}</p> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentList;