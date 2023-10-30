import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

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

  return (
    <div>
      <h1>News Title</h1>
      <p>Content</p>
      {news.map((item) => (
        <div key={item.id}>
          <h2 onClick={() => setSelectedNews(item)}>{item.NewsTittle}</h2>
          <p>{item.NewsContent}</p>
        </div>
      ))}
      {selectedNews && (
        <div>
          <h1>{selectedNews.NewsTittle}</h1>
          <p>{selectedNews.NewsContent}</p>
        </div>
      )}
    </div>
  );
}

export default Test;
