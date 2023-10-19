import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarPage(props) {
  return (
    <>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{ paddingTop: "20px" }}>
            {props.title}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <img
              alt=""
              src="asset/img/Logo_Universitas_Negeri_Semarang.png"
              width="40"
              className="d-inline-block align-top"
            />{" "}
            <Navbar.Brand href="#home" style={{ paddingTop: "12px" }}>
              UNIVERSITAS NEGERI SEMARANG
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <hr style={{ border: "2px solid black" }} />
    </>
  );
}
