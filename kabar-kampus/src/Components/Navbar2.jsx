import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function Navbar2() {
  return (
    <>
      <Navbar data-bs-theme="light">
        <Container>
          <img
            alt=""
            src="asset/img/Logo_Universitas_Negeri_Semarang.png"
            width="40"
          />
          <Navbar.Brand
            href="#home"
            style={{ paddingTop: "20px", paddingLeft: "5px" }}
          >
            {titleUniv}
          </Navbar.Brand>
          <Nav className="m-auto"></Nav>
        </Container>
      </Navbar>
      <hr style={{ border: "2px solid black" }} />
    </>
  );
}
