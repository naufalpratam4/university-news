import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Navbar2 from "./Components/Navbar/Navbar2";
import DetailNews from "./Pages/DetailNews";
import AddNews from "./Pages/AddNews";
import AdminRegister from "./Components/AdminRegister";
import NewsTableAdmin from "./Pages/NewsTable/NewsTableAdmin";
import RegisterPage from "./Pages/RegisterPage";
import PageCollege from "./Pages/Home/PageCollege";
import PageSport from "./Pages/Home/PageSport";
import PageArtist from "./Pages/Home/PageArtis";
import PagePolitic from "./Pages/Home/PagePolitic";
import Test from "./Pages/Home/test";

const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/college" exact element={<PageCollege />} />
          <Route path="/sport" exact element={<PageSport />} />
          <Route path="/politic" exact element={<PagePolitic />} />
          <Route path="/artist" exact element={<PageArtist />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/nav" exact element={<Navbar2 />} />
          <Route path="/Detail/:id" component={<DetailNews />} />
          <Route path="/AddNews" exact element={<AddNews />} />
          <Route path="/AdminRegister" exact element={<AdminRegister />} />
          <Route path="/MyNews" exact element={<NewsTableAdmin />} />
          <Route path="/MyTes" exact element={<Test />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
