import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const titleUniv = "Kabar Kampus";

  return (
    <>
      <Navbar data-bs-theme="light" pb-2>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="asset/img/Kabar Kampus.png"
              alt="logo unnes"
              width={"70%"}
            />
          </Navbar.Brand>
          <Nav className="ms-auto fw-bold pe-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#pricing">My News</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Link as={Link} to="/login">
            <Button>Login</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
