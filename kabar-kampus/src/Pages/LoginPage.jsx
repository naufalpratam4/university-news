import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import NavbarPage from "../Components/Navbar/Navbar";

export default function LoginPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="container ">
      <NavbarPage />
      <h2 className="text-center fw-bold pb-1">Login</h2>
      <div className="container" style={{ width: "600px" }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="validationCustomUsername">
              <Form.Label className="pt-3">Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-2 pt-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button
            type="submit"
            style={{ background: "#294A70", width: "100%" }}
          >
            Login
          </Button>
          <p className="text-center mt-3">Or</p>
          <button className="btn btn-light" style={{ width: "100%" }}>
            Sign in with Google 🏡
          </button>
          <p>
            Don't Have an Account? <a href="/register">Sign Up</a>
          </p>
        </Form>
      </div>
    </div>
  );
}
