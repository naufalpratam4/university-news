import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function NavbarPage() {
  return (
    <>
      <Navbar data-bs-theme="light">
        <Container className="mt-3">
          <Navbar.Brand>
            <Link to="/home">
              <img src="asset/img/Kabar Kampus.png" alt="logo" width={"70%"} />
            </Link>
          </Navbar.Brand>
          {/* <Nav className="ms-auto">
            <a href="">Home</a>
          </Nav> */}
        </Container>
      </Navbar>
      <hr style={{ border: "2px solid black" }} />
    </>
  );
}
