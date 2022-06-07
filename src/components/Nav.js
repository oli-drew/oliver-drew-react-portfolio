import React from "react";
import "../styles/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 nav-background">
      <a
        className="navbar-brand logo mx-3 py-md-2 px-md-2 nav-logo-background"
        href="#about"
        onClick={() => handlePageChange("About")}
      >
        Oliver Drew | Web Developer
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <a
            className={
              currentPage === "About" ? "nav-link nav-link-active" : "nav-link"
            }
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPage === "Work" ? "nav-link nav-link-active" : "nav-link"
            }
            href="#work"
            onClick={() => handlePageChange("Work")}
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPage === "Contact"
                ? "nav-link nav-link-active"
                : "nav-link"
            }
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="/Oliver-Drew-Resume.pdf" className="nav-link" download>
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
