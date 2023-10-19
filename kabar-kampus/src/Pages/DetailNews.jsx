import React from "react";
import NavbarPage from "../Components/Navbar";

function DetailNews() {
  return (
    <div className="container">
      <NavbarPage />
      <div className="konten">
        <img
          src="https://images6.alphacoders.com/121/1214058.png"
          width={"100%"}
          alt=""
        />
        <label htmlFor="">
          <h2>Ini Judul Berita</h2>
        </label>
        <p>Dan ini isi atau konten</p>
      </div>
    </div>
  );
}

export default DetailNews;
