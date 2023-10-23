import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ButtonPrimary from "../Components/button/ButtonPrimary";

function CardNews() {
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
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

        <div className="" style={{ justifyContent: "space-around" }}>
          <p>Lorem.</p>
          <Link to="/detail">
            <ButtonPrimary />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardNews;
