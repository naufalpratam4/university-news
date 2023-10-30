import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ButtonPrimary from "../button/ButtonPrimary";

function CardNews() {
  return (
    <Card style={{ width: "22rem", marginTop: "10px" }}>
      <Card.Img
        variant="top"
        src="https://images5.alphacoders.com/116/1166226.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src="asset/img/Logo_Universitas_Negeri_Semarang.png"
              alt=""
              width={"25%"}
              style={{ paddingBottom: "20px", borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <h4 style={{ marginBottom: "-5px", fontWeight: "bold" }}>
                Naufal
              </h4>
              <p style={{ fontSize: "14px" }}>12/01/23</p>
            </div>
          </div>
          <Link to="/detail">
            <ButtonPrimary nameBtn="Baca Selengkapnya" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardNews;
