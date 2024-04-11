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
    <nav className="header hover-link">
      <ul className="nav">
        <li>
          <a href="/home">
            <strong>Kitaab</strong>
          </a>
        </li>
        <li>
          <a href="/community-blog">Community</a>
        </li>
        <li>
          <a href="/editor">Publish</a>
        </li>
        <li>
          <a href="/sign-in">Profile</a>
        </li>
      </ul>
    </nav>
  );
}
