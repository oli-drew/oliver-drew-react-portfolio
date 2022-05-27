import React from "react";
import image from "../../img/default.jpg";

export default function About(handlePageChange) {
  return (
    <div className="container">
      <div className="row text-center pb-4">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col-xl-4 text-center pb-4">
          <img
            className="rounded-circle"
            width="300"
            height="300"
            src={image}
          />
        </div>
        <div className="col-xl-8">
          <p>
            Hi, my name’s Oliver Drew, and I’m a Web Developer based in
            Birmingham, UK. I am currently learning to code with the University
            of Birmingham’s Web Development Bootcamp.
          </p>
          <p>
            I have an interest in web applications that use mapping and spatial
            data. This is due to my background in Geographic Information Systems
            which I studied at the University of Southampton during my Master's
            degree.
          </p>
          <p>
            I recently worked as part of a team to develop a restaurant locating
            application, called Birmingham Association Banquets. As part of this
            project it was my role to implement the map using the OpenLayers 6
            mapping library. You can see a live demo of the project below.
          </p>
          <p></p>
          <p>
            Please get in{" "}
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              contact
            </a>{" "}
            if you would like to learn more about me and my work.
          </p>
        </div>
      </div>
    </div>
  );
}
