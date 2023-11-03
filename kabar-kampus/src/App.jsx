import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/Pages/Home/HomePage";
import SignUpForm from "./Pages/Authentikasi/SignUp";
import ProtectedRoute from "./protectedroute/ProtectedRoute";
import PageArtis from "../src/Pages/Home/PageArtis";
import PageSport from "../src/Pages/Home/PageSport";
import PagePolitic from "../src/Pages/Home/PagePolitic";
import PageCollege from "../src/Pages/Home/PageCollege";
import AddNews from "./Pages/AddNews";
import NewsTableAdmin from "../src/Pages/NewsTable/NewsTableAdmin";
const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/addnews" element={<AddNews />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/MyNews" element={<NewsTableAdmin />} />
            <Route path="/sport" element={<PageSport />} />
            <Route path="/artist" element={<PageArtis />} />
            <Route path="/politic" element={<PagePolitic />} />
            <Route path="/college" element={<PageCollege />} />
          </Route>
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
