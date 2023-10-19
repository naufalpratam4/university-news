import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardNews;
