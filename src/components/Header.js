import React from "react";
import Nav from "./Nav";
import "../styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 nav-background">
      <a
        className="navbar-brand logo mx-3 py-md-2 px-md-2 nav-logo-background"
        href="#about"
        onClick={() => handlePageChange("About")}
      >
        Oliver Drew | Web Developer
      </a>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
