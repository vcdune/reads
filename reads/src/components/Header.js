import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <nav className="hover-link">
      <ul className="header">
        <div>
          <li>
            <a href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="/community-blog">Community</a>
          </li>
          <li>
            <a href="/editor">Publish</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
