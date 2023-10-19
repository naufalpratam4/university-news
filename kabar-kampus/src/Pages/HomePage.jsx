import ButtonAddBerita from "../Components/ButtonAddBerita";
import CarouselPage from "../Components/CarouselFeat";
import Navbar2 from "../Components/Navbar2";

export default function HomePage() {
  return (
    <>
      <Navbar2 />
      <CarouselPage />
      <div className="container pt-2">
        <ButtonAddBerita />
      </div>
    </>
  );
}
