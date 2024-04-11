import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function ProfileDash() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          setUsername(user.displayName);
        } else {
          setUsername("Guest");
        }
      } catch (error) {
        console.error("Error fetching username:", error.message);
      }
    };

    fetchUsername();

    return () => setUsername("");
  }, []);

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      setUsername("Guest");
    }).catch((error) => {
      console.error("Error signing out:", error.message);
    });
  };

  return (
    <div className="page-view">
      <div className="page-container">
        <p>
          <strong>Hello there, {username}.</strong>
        </p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}
