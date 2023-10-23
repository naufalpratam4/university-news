import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar2 from "./Components/Navbar2";
import DetailNews from "./Pages/DetailNews";
import AddNews from "./Pages/AddNews";
import NewsData from "./Pages/NewsData";
import AdminRegister from "./Components/AdminRegister";

const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/nav" exact element={<Navbar2 />} />
          <Route path="/Detail" exact element={<DetailNews />} />
          <Route path="/AddNews" exact element={<AddNews />} />
          <Route path="/NewsData" exact element={<NewsData />} />
          <Route path="/AdminRegister" exact element={<AdminRegister />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
