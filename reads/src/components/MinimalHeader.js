import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function MinimalHeader() {
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
    <nav>
      <ul className="minimal">
        <li>
          <a href="/home">Return</a>
        </li>
      </ul>
    </nav>
  );
}
