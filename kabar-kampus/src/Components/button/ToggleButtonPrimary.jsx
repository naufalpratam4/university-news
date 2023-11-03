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
            <KotakBerita
              srcImg="asset/img/sport.jpg"
              tittleNews="Sport"
              descriptionNews="Sports news is a short story that informs us about the latest happenings in the world of sports, such as match results, athlete achievements, and team-related news. By reading sports news, we can stay updated and learn more about what's happening in the sports world we enjoy."
              linkPage="/sport"
            />
            <KotakBerita
              srcImg="asset/img/politic.jpg"
              tittleNews="Politic"
              descriptionNews="Political news provides the latest information on political events and developments, including government policies, political actions, and elections. It is crucial for understanding political decisions, policy changes, and current issues that impact society. By reading political news, readers can stay up-to-date with local and global political dynamics."
              linkPage="/politic"
            />
            <KotakBerita
              srcImg="asset/img/nashwa2.jpg"
              tittleNews="Artist"
              descriptionNews="Celebrity news is a brief report on the latest events regarding the lives and careers of celebrities. It includes gossip, achievements, recent projects, and their personal activities. This news provides a quick glimpse into the lives of celebrities, often capturing public attention."
              linkPage="/artist"
            />
            <KotakBerita
              srcImg="asset/img/kampus.jpg"
              tittleNews="College"
              descriptionNews=" Campus life news is a brief report on recent events in universities, covering student activities, campus events, academic achievements, and other important developments. It provides an overview of the atmosphere and recent developments in the academic community."
              linkPage="/college"
            />
          </>
        );
      case 2:
        return (
          <KotakBerita
            srcImg="asset/img/KabarKampus.jpg"
            tittleNews="Layanan Lisensi Canva"
            descriptionNews="Klaim layanan lisensi Canva for education, Hanya tersedia untuk 5000 mahasiswa"
            linkTo="https://www.instagram.com/p/Cy5FGJepUkK/"
          />
        );
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
          Category
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Kabar Kampus
        </ToggleButton>
      </ToggleButtonGroup>

      <div>{getImageToShow()}</div>
    </div>
  );
}

export default ToggleButtonPrimary;
