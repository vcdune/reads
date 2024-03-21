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
          .collection("startupDirectory")
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
    startup.startupName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="directory-container">
      <strong>
        <p>Middle-East Directory List</p>
      </strong>
      <p>
        Startups constantly being added, contact{" "}
        <strong>dunevc@gmail.com</strong>.
      </p>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="startup-list">
        {filteredDirectory.map((startup, index) => (
          <div key={index} className="startup-item">
            <img
              src={startup.imageURL}
              alt={startup.startupName}
              className="startup-logo"
            />
            <div className="startup-info">
              <h5>{startup.startupName}</h5>
              <p>{startup.startupTagLine}</p>
              <Link to={`/startup/${startup.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
