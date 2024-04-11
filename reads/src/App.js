import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./components/firebaseConfig";

// Import pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import Blog from "./pages/Blog";
import ReadPage from "./pages/ReadPage";
import TextEditor from "./pages/TextEditor";

// Import CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [user, loading] = useAuthState(firebase.auth());
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAuthLoaded(true);
    }
  }, [loading]);

  if (!authLoaded) {
    return null; // Render nothing until authentication state is fully loaded
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Welcome />}
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route
            path="/community-blog"
            element={user ? <Blog /> : <Navigate to="/" />}
          />
          <Route
            path="/editor"
            element={user ? <TextEditor /> : <Navigate to="/" />}
          />
          <Route path="/pages/:id" element={<ReadPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
