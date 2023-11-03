import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ButtonPrimary from "../button/ButtonPrimary";
import axios from "axios";

function CardNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://kabar-kampus-default-rtdb.firebaseio.com/berita.json")
      .then((response) => {
        const newsData = response.data || {};
        const newsArray = Object.keys(newsData).map((key) => ({
          id: key,
          ...newsData[key],
        }));
        setNews(newsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Get the first three items from the news array
  const firstThreeNews = news.slice(0, 3);

  return (
    <div>
      {firstThreeNews.map((item) => (
        <Card key={item.id} style={{ width: "22rem", marginTop: "10px" }}>
          <Card.Img variant="top" src={item.imageSrc} />
          <Card.Body>
            <Card.Title>{item.NewsTittle}</Card.Title>
            <Card.Text>{item.NewsContent}</Card.Text>
            <div style={{ marginLeft: "10px" }}>
              <h4 style={{ marginBottom: "-5px", fontWeight: "bold" }}>
                {item.Author}
              </h4>
              <p style={{ fontSize: "14px" }}>{item.NewsDate}</p>
              <Link to={`/detail/${item.id}`}>
                <ButtonPrimary nameBtn="Baca Selengkapnya" />
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardNews;
