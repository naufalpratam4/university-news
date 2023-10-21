import React from "react";
import NavbarPage from "../Components/Navbar";

function DetailNews() {
  return (
    <div className="container">
      <NavbarPage />
      <div
        className="kontenIMG"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <img
          src="https://images6.alphacoders.com/121/1214058.png"
          width={"60%"}
          alt=""
        />
      </div>

      <div
        className="kontenTitle "
        style={{ justifyContent: "flex-start", display: "flex" }}
      >
        <h2>Ini Title</h2>
      </div>

      <div className="kontenDeskripsi">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
          nihil saepe dignissimos consectetur, adipisci ullam cum, harum
          excepturi ipsa voluptas amet temporibus maxime. Voluptatum fugit
          eligendi distinctio itaque illo.
        </p>
      </div>
    </div>
  );
}

export default DetailNews;
