import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Navbar2 from "../../Components/Navbar/Navbar2";
import axios from "axios";
import { Link } from "react-router-dom";

function TablePage() {
  const [news, setNews] = useState([]);

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

  const handleDelete = (id) => {
    axios
      .delete(
        `https://kabar-kampus-default-rtdb.firebaseio.com/berita/${id}.json`
      )
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting news:", error);
      });
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
                  onClick={() => handleDelete(newsItem.id)}
                >
                  Delete
                </Button>
                <Button
                  className="btn btn-warning "
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
    </>
  );
}

export default TablePage;
