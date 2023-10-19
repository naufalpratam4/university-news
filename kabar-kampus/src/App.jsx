import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/home" exact element={<HomePage />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
