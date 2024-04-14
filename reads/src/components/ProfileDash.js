import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function ProfileDash() {
  const user = firebase.auth().currentUser;

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => { })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className="profile-container">
      <img src={user.photoURL} alt={user.displayName} />
      <h3>{user.displayName}</h3>
      <p>A random and not-so-stupid bio.</p>
      <button onClick={handleSignOut} className="btn btn-dark btn-sm">
        Sign Out
      </button>
    </div>
  );
}
