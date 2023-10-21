import React from "react";
import NavbarPage from "../Components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useState } from "react";

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
    <div className="container mt-5">
      <NavbarPage />

      <div className="container" style={{ width: "800px" }}>
        {" "}
        <h2 className=" fw-bold pb-1">Add News</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="validationCustom01">
              <Form.Label>Author</Form.Label>
              <Form.Control required type="text" placeholder="Author" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustomUsername">
              <Form.Label className="pt-2">Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* title */}
            <Form.Group controlId="validationCustomUsername">
              <Form.Label className="pt-2">News Title</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="News Title"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* deskripsi */}
            <Form.Group
              className="pt-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>isi Konten</Form.Label>
              <Form.Control as="textarea" rows={3} required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>

            {/* add image */}
            <Form.Group controlId="formFile" className="pt-2">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button
            type="submit"
            style={{ background: "#294A70", width: "100%" }}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
