import React from "react";
import Skills from "../Skills";

export default function Resume() {
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <a
            href="/Oliver-Drew-Resume.pdf"
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
