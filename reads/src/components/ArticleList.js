import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

export default function ArticleList() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const db = firebase.firestore();

  const fetchDocuments = async () => {
    try {
      const querySnapshot = await db.collection("editorContent").get();
      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocuments(documentsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDocuments = documents.filter((document) =>
    document.documentTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <ClipLoader
            color={"black"}
            loading={loading}
            css={override}
            size={50}
          />
        </div>
      ) : (
        <div className="documentList">
          <ul className="post">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <h4 className="document-item">Latest.</h4>
            {filteredDocuments
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((document) => (
                <li key={document.id} className="document-item">
                  <p>
                    <strong>
                      {document.genre}{" "}
                      <span className="document-date"> · {document.date}</span>
                    </strong>
                  </p>
                  <Link Link to={`/pages/${document.id}`}>
                    <img
                      src={document.imageURL}
                      alt={document.documentTitle}
                      className="document-image"
                    />
                  </Link>
                  <div className="document-info hover-link">
                    <Link
                      className="document-title"
                      to={`/pages/${document.id}`}
                    >
                      <strong>{document.documentTitle}</strong>
                    </Link>
                    <p className="document-preview">{document.preview}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
