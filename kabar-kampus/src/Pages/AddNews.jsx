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
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      alert("Tidak boleh kosong, harap mengisi form");
      return;
    } else {
      const authorInput = form.elements.Author;
      const emailInput = form.elements.Email;
      const newsTittleInput = form.elements.NewsTittle;
      const newsContentInput = form.elements.NewsContent;
      const newsCategoryInput = form.elements.NewsCategory;
      const newsDateInput = form.elements.NewsDate;

      event.preventDefault();

      try {
        const response = await axios.post(
          "https://kabar-kampus-default-rtdb.firebaseio.com/berita.json",
          {
            Author: authorInput.value,
            Email: emailInput.value,
            NewsTittle: newsTittleInput.value,
            NewsContent: newsContentInput.value,
            NewsCategory: newsCategoryInput.value,
            NewsDate: newsDateInput.value,
          }
        );

        setNews([...news, response.data]);
        alert("Berita berhasil ditambahkan!");
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

            {/* kategori */}
            <div className="mt-3">
              <label htmlFor="">News Category</label>
              <Form.Select
                name="NewsCategory"
                aria-label="Default select example"
                required
              >
                <option></option>
                <option value="College">College</option>
                <option value="Sport">Sport</option>
                <option value="Politic">Politic</option>
                <option value="Artist">Artis</option>
                <option value="Travel">Travel</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </div>

            {/* datepicker */}
            <div className="mt-2">
              <Form.Group controlId="NewsDate">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedDate || ""}
                  onChange={(e) => handleDateChange(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            {/* img */}
            <Form.Group controlId="newsImage" className="mb-3 mt-2">
              <Form.Label>Choose Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
                accept="image/*"
              />
            </Form.Group>

            {/* deskripsi */}
            <Form.Group className="pt-1" controlId="NewsContent">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={5} required />
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
