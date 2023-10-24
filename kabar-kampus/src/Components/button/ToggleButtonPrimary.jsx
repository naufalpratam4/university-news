import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import KotakBerita from "../KotakBerita/KotakBerita";

function ToggleButtonPrimary() {
  const [selectedValue, setSelectedValue] = useState(1);

  const getImageToShow = () => {
    switch (selectedValue) {
      case 1:
        return (
          <>
            <KotakBerita srcImg="asset/img/lewis.jpg" />
            <KotakBerita srcImg="asset/img/lewis.jpg" />
            <KotakBerita srcImg="asset/img/lewis.jpg" />
            <KotakBerita srcImg="asset/img/lewis.jpg" />
          </>
        );
      case 2:
        return <img src="asset/img/lewis.jpg" width={"100%"} alt="Motor" />;
      case 3:
        return (
          <>
            <img src="asset/img/lewis.jpg" width={"100%"} alt="Nashwa" />
          </>
        );
      default:
        return null;
    }
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={selectedValue}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
      >
        <ToggleButton id="tbg-radio-1" value={1}>
          Trending
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Kategori
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Lewis
        </ToggleButton>
      </ToggleButtonGroup>

      <div>{getImageToShow()}</div>
    </div>
  );
}

export default ToggleButtonPrimary;
