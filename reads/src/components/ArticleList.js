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

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, "");
  };

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
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search articles written by others..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            {filteredDocuments
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((document) => (
                <li key={document.id} className="document-item">
                  <Link Link to={`/pages/${document.id}`}>
                    {document.imageURL && (
                      <img
                        src={document.imageURL}
                        alt={document.documentTitle}
                        className="document-image"
                      />
                    )}
                  </Link>
                  <div className="document-info hover-link">
                    <Link
                      className="document-title"
                      to={`/pages/${document.id}`}
                    >
                      <img
                        src={document.authorImage}
                        alt={document.author}
                        style={{
                          borderRadius: "8px",
                          maxWidth: "30px",
                          height: "auto",
                          marginRight: "4px",
                        }}
                      />{" "}
                      <strong>{document.documentTitle}</strong>
                      <span className="document-date"> · {formatDate(document.date)}</span>
                    </Link>
                    <p className="document-preview">
                      {removeHtmlTags(document.content.substring(3, 100))}...
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
