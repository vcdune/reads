import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Header from "../components/header";
import Footer from "../components/footer";

const DocumentView = () => {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const db = firebase.firestore();
        const documentRef = await db.collection("editorContent").doc(id).get();

        if (documentRef.exists) {
          setDocumentData(documentRef.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [id]);

  return (
    <>
      <Header />
      <div className="page-view">
        <div className="page-container">
          {" "}
          {/* Add a container div */}
          {documentData ? (
            <>
              <h1 className="page-title">{documentData.documentTitle}</h1>
              <img
                src={documentData.imageURL}
                alt={documentData.documentTitle}
                className="document-image"
              />
              <div
                className="documentView"
                dangerouslySetInnerHTML={{ __html: documentData.content }}
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DocumentView;
