import CardNews from "../Components/CardNews";
import CarouselPage from "../Components/CarouselFeat";
import Navbar2 from "../Components/Navbar/Navbar2";
import SearchNews from "../Components/SearchNews";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import ButtonPrimary from "../Components/button/ButtonPrimary";
import ToggleButtonPrimary from "../Components/button/ToggleButtonPrimary";
import KotakBerita from "../Components/KotakBerita/KotakBerita";

export default function HomePage() {
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
            <h2 className="fw-bold">⭐ News Sport</h2>
            <div className="imageThumnail">
              <img
                src="https://images5.alphacoders.com/121/1214059.png"
                width={"100%"}
                style={{ paddingBottom: "10px", borderRadius: "20px" }} // 9 divided by 16 (aspect ratio)
                alt=""
              />
            </div>

            {/* kotak berita */}
            <div
              className=""
              style={{
                width: "700px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <KotakBerita srcImg="asset/img/lewis.jpg" />
              <KotakBerita srcImg="asset/img/lewis.jpg" />
            </div>
            <div
              className=""
              style={{
                width: "700px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <KotakBerita srcImg="asset/img/lewis.jpg" />
              <KotakBerita srcImg="asset/img/lewis.jpg" />
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
