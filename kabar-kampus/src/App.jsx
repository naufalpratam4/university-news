import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/Pages/Home/HomePage";
// import { ProtectedRoute } from "./protectedroute/ProtectedRoute";
import SignUpForm from "./Pages/Authentikasi/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Authentication logic here
    // For example, after successful login:
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpForm onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
