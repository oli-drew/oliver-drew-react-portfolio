import React from "react";
import "../styles/HeroImage.css";
import image from "../img/bullring.webp";

function HeroImage() {
  return (
    <div className="mb-4">
      <img
        src={image}
        style={{ maxWidth: "100%" }}
        alt="Close up view of the Selfridges building in Birmingham"
      />
    </div>
  );
}

export default HeroImage;
