import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { Link } from "react-router-dom";

function TablePage() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://65239ce1ea560a22a4e88ce2.mockapi.io/Berita")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://65239ce1ea560a22a4e88ce2.mockapi.io/Berita/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting news:", error);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <h2>News</h2>
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
            <th>Image</th>
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

              <td>
                <img src="asset/img/lewis.jpg" width={"20%"} alt="" />
              </td>
              <td>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    className="btn btn-danger me-1"
                    onClick={() => handleDelete(newsItem.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn btn-warning "
                    onClick={() => handleDelete(newsItem.id)}
                  >
                    Update
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TablePage;
