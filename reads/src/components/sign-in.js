import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false); // New state to toggle between sign-in and registration

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      console.log("Signed in");
    } catch (error) {
      setError(error.message);
      console.error("Error signing in:", error.message);
    }
  };

  const handleRegistration = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(username, password);
      console.log("Registered and signed in");
      window.location.href = "/home";
    } catch (error) {
      setError(error.message);
      console.error("Error registering:", error.message);
    }
  };

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('Signed out successfully');
        setCurrentUser(null);
      })
      .catch(error => {
        setError(error.message);
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className="sign-up">
      <p>Welcome {currentUser && currentUser.email}</p>
      {currentUser ? (
        <>
          <p>You are signed in as: {currentUser.email}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          {isNewUser ? (
            <button onClick={handleRegistration}>Register</button>
          ) : (
            <button onClick={handleSignin}>Sign-in</button>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <br/>
          <p>
            {isNewUser
              ? "Already have an account? "
              : "Don't have an account? "}
            <a href="#" onClick={() => setIsNewUser(!isNewUser)}>
              {isNewUser ? "Sign in" : "Register"}
            </a>
          </p>
        </>
      )}
    </div>
  );
}
