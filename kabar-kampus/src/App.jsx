import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
