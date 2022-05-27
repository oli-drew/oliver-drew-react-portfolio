import React from "react";
import "../styles/HeroImage.css";
import image from "../img/bullring.webp";

function HeroImage() {
  return (
    <div className="mb-4">
      <img src={image} style={{ maxWidth: "100%" }} />
    </div>
  );
}

export default HeroImage;
