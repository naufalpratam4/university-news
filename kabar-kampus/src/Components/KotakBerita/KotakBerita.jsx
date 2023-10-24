import React from "react";
import { Link } from "react-router-dom";
function KotakBerita(props) {
  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src={props.srcImg}
          width="30%"
          alt=""
          style={{ verticalAlign: "middle" }}
        />
        <p style={{ marginLeft: "10px", marginTop: "5px", fontSize: "10px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          accusantium vero facilis modi molestiae nobis quis, minima explicabo,
          quos impedit quidem odio neque, natus ex omnis veritatis. Voluptas,
          sint iusto.
          <Link to="#">
            <p style={{ fontSize: "10px" }}>Lihat Selengkapnya</p>
          </Link>
        </p>
      </div>
    </>
  );
}

export default KotakBerita;
