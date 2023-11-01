import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../../../config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUpForm = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  //   handle submit
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/");
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  return (
    <div className="container pt-5" style={{ width: "500px" }}>
      <h2 className="fw-bold text-center mt-5">
        {login ? "Sign In" : "Sign Up"}
      </h2>
      <Form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukkan email"
            name="email"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukkan password"
            name="password"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
        >
          {login ? "SignIn" : "SignUp"}
        </Button>
        <div>
          {login ? "Don't have an account?" : "Have an account? "}
          <Link
            onClick={() => setLogin(!login)}
            style={{ textDecoration: "none" }}
          >
            {login ? "sign up" : "sign in"}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
