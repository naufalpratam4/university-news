import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../button/ButtonPrimary";
import { signOut } from "firebase/auth";
import { database } from "../../../config/FirebaseConfig";

export default function Navbar2() {
  const history = useNavigate();
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <>
      <Navbar data-bs-theme="light" pb-2>
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img
                src="asset/img/Kabar Kampus.png"
                alt="logo unnes"
                width={"70%"}
              />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto fw-bold pe-2">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/MyNews">
              My News
            </Nav.Link>
          </Nav>
          <button className="btn btn-danger" onClick={handleClick}>
            SignOut
          </button>
        </Container>
      </Navbar>
    </>
  );
}
