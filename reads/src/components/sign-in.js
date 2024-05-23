import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig";

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
    <div className="register-page">
      <div>
        <form>
          <div className="form-group"></div>
          <h5 style={{ fontSize: "18px", color: "#98a1b2" }} className="mb-3">
            Hello, happy to see you here.
          </h5>
          <h1 style={{ color: "#333333", fontWeight: "bold" }}>
            Start by signing-in with Google.
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
              <a href="/">{"< return"}</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
