import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Navbar2 from "../../Components/Navbar/Navbar2";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function TablePage() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://kabar-kampus-default-rtdb.firebaseio.com/berita.json")
      .then((response) => {
        const newsData = response.data || {};
        const newsArray = Object.keys(newsData).map((key) => ({
          id: key,
          ...newsData[key],
        }));
        setNews(newsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDelete = (newsItem) => {
    setSelectedNews(newsItem);
    setShowDeleteModal(true);
  };

  const handleEdit = (newsItem) => {
    setSelectedNews(newsItem);
    setShowEditModal(true);
  };

  const handleUpdateSubmit = () => {
    if (selectedNews) {
      axios
        .put(
          `https://kabar-kampus-default-rtdb.firebaseio.com/berita/${selectedNews.id}.json`,
          selectedNews
        )
        .then(() => {
          setShowEditModal(false);
          fetchData();
        })
        .catch((error) => {
          console.error("Error updating news:", error);
        });
    }
  };

  const handleDeleteSubmit = () => {
    if (selectedNews) {
      axios
        .delete(
          `https://kabar-kampus-default-rtdb.firebaseio.com/berita/${selectedNews.id}.json`
        )
        .then(() => {
          setShowDeleteModal(false);
          fetchData();
        })
        .catch((error) => {
          console.error("Error deleting news:", error);
        });
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="container mt-5">
        <h2 className="fw-bold">My News</h2>
        <button className="btn btn-primary mb-3">
          <Link
            to="/addnews"
            style={{ color: "white", textDecoration: "none" }}
          >
            Add News
          </Link>
        </button>
      </div>
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>No</th>
            <th>Author</th>
            <th>Email</th>
            <th>Tittle</th>
            <th>Content</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((newsItem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{newsItem.Author}</td>
              <td>{newsItem.Email}</td>
              <td>{newsItem.NewsTittle}</td>
              <td>{newsItem.NewsContent}</td>
              <td>{newsItem.NewsCategory}</td>
              <td>
                {/* ... */}
                <Button
                  className="btn btn-danger me-1"
                  onClick={() => handleDelete(newsItem)}
                >
                  Delete
                </Button>
                <Button
                  className="btn btn-warning "
                  onClick={() => handleEdit(newsItem)}
                  // Update button belum diimplementasikan. Anda perlu mengonfigurasi fungsi untuk meng-handle update.
                >
                  Update
                </Button>
                {/* ... */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* formulir edit */}
      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulir Edit */}

          <Form.Group controlId="Author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={selectedNews?.Author}
              onChange={(e) =>
                setSelectedNews({ ...selectedNews, Author: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="Author" className="mt-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={selectedNews?.Email}
              onChange={(e) =>
                setSelectedNews({ ...selectedNews, Email: e.target.value })
              }
            />
          </Form.Group>

          {/* Tittle */}
          <Form.Group controlId="Author" className="mt-2">
            <Form.Label>Tittle</Form.Label>
            <Form.Control
              type="text"
              value={selectedNews?.NewsTittle}
              onChange={(e) =>
                setSelectedNews({ ...selectedNews, NewsTittle: e.target.value })
              }
            />
          </Form.Group>

          {/* deskripsi */}
          <Form.Group className="pt-2" controlId="NewsContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={selectedNews?.NewsContent}
              onChange={(e) =>
                setSelectedNews({
                  ...selectedNews,
                  NewsContent: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the news with title "
          {selectedNews?.NewsTittle}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TablePage;
