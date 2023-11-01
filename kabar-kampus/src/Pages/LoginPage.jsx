import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }

    // Validasi password
    if (formData.password.length < 6) {
      newErrors.password = "Password harus minimal 6 karakter";
    }

    setErrors(newErrors);

    // Form dianggap valid jika tidak ada error
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi form sebelum mengirim data
    if (validateForm()) {
      // Kirim data sign-in ke server atau lakukan tindakan lainnya
      console.log("Data sign-in:", formData);
    } else {
      console.log("Form tidak valid");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center">Sign In</h2>
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" className="mt-2" style={{ width: "100%" }}>
          Sign In
        </Button>
        <div className="text-center">
          {" "}
          <p>or</p>
        </div>

        <div className="text-center" style={{ marginTop: "-20px" }}>
          <Link to="/signup">Sign Up</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
