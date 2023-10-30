import React from "react";
import { Link } from "react-router-dom";
function KotakBerita(props) {
  return (
    <Link
      to={props.linkPage}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={props.srcImg}
          width="30%"
          alt=""
          style={{ verticalAlign: "middle" }}
        />

        <div className="">
          <h5 className="fw-bold ms-2 mt-3">{props.tittleNews}</h5>
          <p style={{ marginLeft: "10px", marginTop: "5px", fontSize: "10px" }}>
            {props.descriptionNews}
            <Link to="#">
              <p style={{ fontSize: "10px" }}>Lihat Selengkapnya</p>
            </Link>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default KotakBerita;
