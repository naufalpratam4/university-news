import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../config/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterAndLogin = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  //   handle submit
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password).then((data) => {
        console.log(data, "authData");
        history("/");
      });
    } else {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/");
        })
        .catch((err) => {
          alert(err.code);
        });
    }

    // Validasi form sebelum mengirim data
    if (validateForm()) {
      // Kirim data sign-up ke server atau lakukan tindakan lainnya
      console.log("Data sign-up:", formData);
    } else {
      console.log("Form tidak valid");
    }
  };

  return (
    <div className="container">
      <h2 className="fw-bold text-center mt-5">
        {login ? "SignIn" : "SignUp"}
      </h2>
      <Form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukkan email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukkan password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <Form.Text className="text-danger">{errors.password}</Form.Text>
          )}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
        >
          {SignIn ? "SignIn" : "SignUp"}
        </Button>
        <p>
          {" "}
          Have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterAndLogin;
