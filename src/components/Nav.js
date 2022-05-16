import React from "react";
import "../styles/Nav.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a
        className="navbar-brand logo"
        href="#"
        onClick={() => handlePageChange("Home")}
      >
        Oliver Drew | Web Developer
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <a
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className={currentPage === "Work" ? "nav-link active" : "nav-link"}
            href="#work"
            onClick={() => handlePageChange("Work")}
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <a className="btn btn-sm btn-outline-secondary" type="btn">
              Resume
            </a>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
