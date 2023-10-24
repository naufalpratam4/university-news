import React from "react";
import Button from "react-bootstrap/esm/Button";

function ButtonPrimary(props) {
  return (
    <>
      <Button style={{ background: "#294A70" }}>{props.nameBtn}</Button>
    </>
  );
}

export default ButtonPrimary;
