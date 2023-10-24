import React, { useState } from "react";
import NavbarPage from "../Components/Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function AddNews() {
  const [validated, setValidated] = useState(false);
  const [news, setNews] = useState([]);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      alert("Tidak boleh kosong, harap mengisi form");
      return;
    } else {
      const authorInput = form.elements.Author;
      const emailInput = form.elements.Email;
      const newsTittleInput = form.elements.NewsTittle;
      const newsContentInput = form.elements.NewsContent;

      event.preventDefault();
      try {
        const response = await axios.post(
          "https://65239ce1ea560a22a4e88ce2.mockapi.io/Berita",
          {
            Author: authorInput.value,
            Email: emailInput.value,
            NewsTittle: newsTittleInput.value,
            NewsContent: newsContentInput.value,
          }
        );

        setNews([...news, response.data]);
        alert("Berita berhasil ditambahkan!");

        // Mengarahkan ke halaman berita setelah menambahkan
        // window.location.href = "/berita"; // Ganti dengan path yang sesuai
      } catch (error) {
        console.error("Error adding news:", error);
      }
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <NavbarPage />

      <div className="container" style={{ width: "800px" }}>
        <h2 className=" fw-bold pb-1">Add News</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* author */}
            <Form.Group controlId="Author">
              <Form.Label>Author</Form.Label>
              <Form.Control required type="text" placeholder="Author" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            {/* email */}
            <Form.Group controlId="Email">
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
            <Form.Group controlId="NewsTittle">
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
            <Form.Group className="pt-2" controlId="NewsContent">
              <Form.Label>isi Konten</Form.Label>
              <Form.Control as="textarea" rows={3} required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* cek ulang */}
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          {/* button */}
          <Button
            type="submit"
            style={{
              background: "#294A70",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            Add News
          </Button>
        </Form>
      </div>
    </div>
  );
}
