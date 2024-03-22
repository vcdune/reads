import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom";

export default function Directory() {
  const [directory, setDirectory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await firebase
          .firestore()
          .collection("jobs")
          .get();
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDirectory(documentsData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDirectory = directory.filter((startup) =>
    startup.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        class="alert"
        style={{
          padding: "10px",
          borderRadius: "0px",
          backgroundColor: "rgb(95, 61, 196)",
          color: "white",
          textAlign: "center",
        }}
        role="alert"
      >
        <strong>
          NEW: jobs added on rolling basis. To have your roles featured
          <button
            style={{
              backgroundColor: "white",
              color: "rgb(95, 61, 196)",
              border: "none",
              padding: "3px 6px",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Contact us
          </button>
        </strong>
      </div>
      <div className="directory-container">
        <strong>
          <h1 style={{ textAlign: "center" }}>MENA.tech</h1>
        </strong>
        <p style={{ textAlign: "center" }}>
          Better Matches. Better Jobs. Happier You.
        </p>
        <p>
          <span style={{ color: "red" }}>[LIVE]</span> Welcome! MENA.tech tracks
          software, engineering, and tech jobs all across the Middle East. Reach
          out to us to have your roles/positions featured.
        </p>
        <p>
          <strong>200</strong> tech companies ∙ <strong>50</strong> roles open
        </p>
        <input
          type="text"
          placeholder="Search Jobs"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="startup-list">
          {filteredDirectory.map((startup, index) => (
            <div key={index} className="startup-item">
              <img
                src={startup.imageURL}
                alt={startup.company}
                className="startup-logo"
              />
              <div className="startup-info">
                <h5>{startup.company} </h5>
                <p>
                  {startup.title} ∙{" "}
                  <span style={{ color: "grayText", fontSize: "14px" }}>
                    {startup.date}
                  </span>
                </p>
                <p style={{ color: "grayText" }}>{startup.location}</p>
                <Link
                  to={`/startup/${startup.id}`}
                  className="view-details-link"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </>
  );
}
