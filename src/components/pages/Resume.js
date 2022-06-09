import React from "react";
import Skills from "../Skills";
import resumePDF from "../../assets/Oliver-Drew-Resume.pdf";

export default function Resume() {
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <a
            href={resumePDF}
            type="button"
            className="btn btn-outline-secondary btn-lg"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      <h3>Skills</h3>
      <Skills />
    </div>
  );
}
