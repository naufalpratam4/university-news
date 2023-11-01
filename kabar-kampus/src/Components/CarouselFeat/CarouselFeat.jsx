import { Carousel } from "react-bootstrap";

export default function CarouselPage() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "56.25%" }}
            src="asset/img/ugmm.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Universitas Gadjah Mada</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "56.25%" }}
            src="asset/img/unnes.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Universitas Negeri Semarang</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "56.25%" }}
            src="asset/img/UI.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Universitas Indonesia</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
