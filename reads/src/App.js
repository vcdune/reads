// Pages
import Home from "./pages/Home";
import ReadPage from "./pages/ReadPage";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCjlP_icdXnh6DbIemKIp4M7xWMkvatgKA",
  authDomain: "omilia-f0b42.firebaseapp.com",
  projectId: "omilia-f0b42",
  storageBucket: "omilia-f0b42.appspot.com",
  messagingSenderId: "11465010307",
  appId: "1:11465010307:web:78a4221e498bfea2af7fb6",
  measurementId: "G-8FWM5P1VDC",
});

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* route to pages */}
        <Route path="/pages/:id" element={<ReadPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
