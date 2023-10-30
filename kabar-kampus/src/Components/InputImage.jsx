import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Lakukan sesuatu dengan file (misalnya, simpan di state atau kirim ke server)
    setSelectedImage(file);
  };

  return (
    <Form.Group controlId="imageInput">
      <Form.Label>Choose Image</Form.Label>
      <Form.File
        id="custom-file"
        label="Choose file"
        custom
        onChange={handleImageChange}
      />
    </Form.Group>
  );
};

export default ImageInput;
