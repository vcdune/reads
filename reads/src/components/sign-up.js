import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(username, password);
      console.log("User created");
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };
  return (
    <div className="sign-up">
      <p>Welcome to Dune.</p>
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
      <button onClick={handleRegister}>Create Account</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br/>
      <p>Already have an account? <a href="/sign-in">Sign in</a></p>
    </div>
  );
}
