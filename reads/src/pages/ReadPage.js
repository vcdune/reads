import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
      {/* <MinimalHeader /> */}
      <div className="page-view">
        <div className="page-container">
          {documentData ? (
            <>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#e6e5e3",
                  borderRadius: "8px",
                  padding: "5px 3px",
                }}
              >
                <a href="/community-blog" className="return-text">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="returnIconTitle"
                    stroke="#525252"
                    stroke-width="1.2"
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    fill="none"
                    color="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title id="returnIconTitle">Return</title>{" "}
                      <path d="M19,8 L19,11 C19,12.1045695 18.1045695,13 17,13 L6,13"></path>{" "}
                      <polyline points="8 16 5 13 8 10"></polyline>{" "}
                    </g>
                  </svg>{" "}
                  arete.com
                </a>{" "}
                <svg
                  width="24px"
                  height="24px"
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
                      d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                      fill="#525252"
                    ></path>{" "}
                  </g>
                </svg>
                {documentData.documentTitle}
                <svg
                  width="24px"
                  height="24px"
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
                      d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                      fill="#525252"
                    ></path>{" "}
                  </g>
                </svg>
                {documentData.author}
              </div>
              <h1 className="page-title">{documentData.documentTitle}</h1>
              <p style={{ textAlign: "center" }}>by {documentData.author}</p>
              {documentData.imageURL && documentData.imageURL.trim() !== "" && (
                <img
                  src={documentData.imageURL}
                  alt={documentData.documentTitle}
                  className="docuImage"
                />
              )}
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
