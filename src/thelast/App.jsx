// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import T2h from "./T2h";
import AuthPage from "./AuthPage";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/"
          element={<ProtectedRoute><Home /></ProtectedRoute>}
        />
        <Route
          path="/chat/:characterId"
          element={<ProtectedRoute><T2h /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
