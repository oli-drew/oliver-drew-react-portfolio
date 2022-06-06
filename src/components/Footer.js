import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 footer-background">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg">
            <h5>
              <a
                href="https://github.com/oli-drew"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </h5>
          </div>
          <div className="col-6 col-lg">
            <h5>
              <a
                href="mailto:oli_webdev@protonmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </h5>
          </div>
          <div className="col-6 col-lg">
            <h5>
              <a
                href="https://uk.linkedin.com/in/oliver-drew"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </h5>
          </div>
          <div className="col-6 col-lg">
            <h5>
              <a
                href="https://stackoverflow.com/users/16805384/oli-drew"
                target="_blank"
                rel="noreferrer"
              >
                Stack Overflow
              </a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
