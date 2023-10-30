import React from "react";
import { useParams } from "react-router-dom";
import NavbarPage from "../Components/Navbar/Navbar";

function DetailNews() {
  // Get the news ID from the URL params
  const { id } = useParams();

  // Placeholder data - replace with actual data fetching logic
  const newsItem = {
    id: id,
    title: "Ini Title",
    imageUrl: "https://images6.alphacoders.com/121/1214058.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo nihil saepe dignissimos consectetur, adipisci ullam cum, harum excepturi ipsa voluptas amet temporibus maxime. Voluptatum fugit eligendi distinctio itaque illo.",
  };

  return (
    <div className="container">
      <NavbarPage />
      <div
        className="kontenIMG"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <img src={newsItem.imageUrl} width={"60%"} alt="" />
      </div>

      <div
        className="kontenTitle "
        style={{ justifyContent: "flex-start", display: "flex" }}
      >
        <h2>{newsItem.title}</h2>
      </div>

      <div className="kontenDeskripsi">
        <p>{newsItem.content}</p>
      </div>
    </div>
  );
}

export default DetailNews;
