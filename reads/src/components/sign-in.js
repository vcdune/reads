import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig";

let project_name = "Welcome to Kitaab";
let tagline = "The platform built for MENA.";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function SignUp() {
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      console.log("Signed in with Google");
      window.location.href = "/community-blog";
    } catch (error) {
      setError(error.message);
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#F1F4F7" }}
    >
      <div>
        <form>
          <div className="form-group"></div>
          <h1 className="mb-2" style={{ color: "#223037", fontWeight: "bold" }}>
            {project_name}
          </h1>
          <h5 style={{ fontSize: "18px", color: "#98a1b2" }} className="mb-4">
            {tagline}
          </h5>
          <div>
            <button
              type="button"
              className="login-with-google-btn"
              onClick={handleGoogleSignIn}
            >
              Google Sign-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
