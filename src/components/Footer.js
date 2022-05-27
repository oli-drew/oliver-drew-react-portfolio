import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg">
            <h5>
              <a href="https://github.com/oli-drew">GitHub</a>
            </h5>
          </div>
          <div className="col-6 col-lg">
            <h5>
              <a href="mailto:oli_webdev@protonmail.com">Email</a>
            </h5>
          </div>
          <div className="col-6 col-lg">
            <h5>
              <a rel="nofollow" href="https://uk.linkedin.com/in/oliver-drew">
                LinkedIn
              </a>
            </h5>
          </div>
          <div className="col-6 col-lg">
            <h5>
              <a
                rel="nofollow"
                href="https://stackoverflow.com/users/16805384/oli-drew"
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
