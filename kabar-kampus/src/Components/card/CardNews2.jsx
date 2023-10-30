import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function CardNews2(props) {
  return (
    <div
      className="cardNews"
      style={{
        borderRadius: "15px",
        border: "1px solid black",
        background: "#fff",
        boxShadow: "0px 4px 4px 0px #3B6AA0",
      }}
    >
      <div
        className="p-2"
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        {" "}
        <img src={props.imgNews} width={"20%"} alt="" />
        <div className="ps-4">
          <h4>Judul</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, animi
            veritatis minima explicabo beatae facere maxime quo minus, similique
            commodi vero velit. Doloribus explicabo eaque facilis. Similique
            dolorem reprehenderit distinctio.
            <Link to="#">
              <p style={{ fontSize: "10px" }}>Lihat Selengkapnya</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardNews2;
