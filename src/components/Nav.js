import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
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
            currentPage === "Contact" ? "nav-link nav-link-active" : "nav-link"
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
  );
}

export default Nav;
