import CardNews from "../../Components/card/CardNews";
import CarouselPage from "../../Components/CarouselFeat";
import Navbar2 from "../../Components/Navbar/Navbar2";
import SearchNews from "../../Components/SearchNews";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../Components/button/ButtonPrimary";
import ToggleButtonPrimary from "../../Components/button/ToggleButtonPrimary";
import CardNews2 from "../../Components/card/CardNews2";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PageSport() {
  // State untuk menyimpan data berita
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

  // mempersingkat kalimat
  function truncateWords(str, num) {
    const words = str.split(" ");
    if (words.length <= num) {
      return str;
    }
    const truncatedWords = words.slice(0, num);
    return truncatedWords.join(" ") + "...";
  }
  return (
    <>
      <Navbar2 />
      <CarouselPage />
      <Stack direction="horizontal" gap={3} className="container">
        <Link to="/AddNews">
          <div className="p-2">
            <ButtonPrimary nameBtn="+ Add News" />
          </div>
        </Link>
        <div className="p-2 ms-auto">
          <SearchNews />
        </div>
      </Stack>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="row">
          <div className="col-lg-4">
            <CardNews />
          </div>
          <div className="col-lg-4">
            <CardNews />
          </div>
          <div className="col-lg-4">
            <CardNews />
          </div>
        </div>
      </div>

      {/* kategori */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="fw-bold">🌆 Politic News</h2>
            <div className="imageThumnail">
              <img
                src="asset/img/politikwallpaper.jpg"
                width={"100%"}
                style={{ paddingBottom: "10px", borderRadius: "20px" }} // 9 divided by 16 (aspect ratio)
                alt=""
              />
            </div>

            {/* isi kiri */}
            <div className="mb-3" style={{ width: "100%" }}>
              <div
                className="cardNews"
                style={{
                  borderRadius: "15px",
                  border: "1px solid black",
                  background: "#fff",
                  boxShadow: "0px 4px 4px 0px #3B6AA0",
                }}
              >
                {news
                  .filter((item) => item.NewsCategory === "Politic")
                  .map((item) => (
                    <div
                      className="p-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                      }}
                      key={item.id}
                    >
                      <img
                        src="asset/img/Disinformasi.jpg"
                        width={"20%"}
                        alt=""
                      />
                      <div className="ps-4">
                        <h4>{truncateWords(item.NewsTittle, 5)}</h4>
                        <p>
                          {truncateWords(item.NewsContent, 40)}
                          <Link
                            to={`/Detail/${item.id}`}
                            onClick={() => handleDetailClick(item)}
                          >
                            <p style={{ fontSize: "10px" }}>
                              Lihat Selengkapnya
                            </p>
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* kanan */}
          <div className="col-lg-4">
            <ToggleButtonPrimary />
          </div>
        </div>
      </div>
    </>
  );
}
