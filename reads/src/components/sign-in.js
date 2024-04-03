import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      console.log("Signed in");
      window.location.href = "/home";
    } catch (error) {
      setError(error.message);
      console.error("Error signing in:", error.message);
    }
  };
  return (
    <div className="sign-up">
      <p>Join Dune.</p>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleSignin}>Sign-in</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br/>
      <p>Already have an account? <a href="/sign-in">Sign in</a></p>
    </div>
  );
}
