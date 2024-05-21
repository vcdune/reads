import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig";

let project_name = "Now, create your account.";
let tagline = "Hello, welcome to Arete.";

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
      style={{ backgroundColor: "white" }}
    >
      <div>
        <form>
          <div className="form-group"></div>
          <h5 style={{ fontSize: "18px", color: "#98a1b2" }} className="mb-3">
            {tagline}
          </h5>
          <h1 className="mb-2" style={{ color: "#333333", fontWeight: "bold" }}>
            {project_name}
          </h1>
          <br />
          {error && <div className="alert alert-danger">{error}</div>}
          <div>
            <button
              type="button"
              className="login-with-google-btn"
              onClick={handleGoogleSignIn}
            >
              Google Sign-In
            </button>
            <div className="mt-3 text-button">
              <a href="/">
                {"< return"}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
