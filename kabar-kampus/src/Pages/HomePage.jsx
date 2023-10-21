import ButtonAddBerita from "../Components/ButtonAddBerita";
import CardNews from "../Components/CardNews";
import CarouselPage from "../Components/CarouselFeat";
import Navbar2 from "../Components/Navbar2";
import SearchNews from "../Components/SearchNews";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Navbar2 />
      <CarouselPage />
      <Stack direction="horizontal" gap={3} className="container">
        <Link to="/AddNews">
          <div className="p-2">
            <ButtonAddBerita />
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
    </>
  );
}
