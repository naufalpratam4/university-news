import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
