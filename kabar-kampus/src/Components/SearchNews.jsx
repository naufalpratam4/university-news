import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchNews() {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Mahasiswa Baru"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}

export default SearchNews;
