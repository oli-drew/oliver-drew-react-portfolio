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

      {/* <div className="col-md-3 text-end">
        <a className="btn btn-sm btn-outline-secondary" type="btn">
          Resume
        </a>
      </div> */}
    </header>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarToggler"
    //       aria-controls="navbarToggler"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <a
    //       className="navbar-brand logo"
    //       href="#"
    //       onClick={() => handlePageChange("Home")}
    //     >
    //       Oliver Drew | Web Developer
    //     </a>
    //     <div className="collapse navbar-collapse" id="navbarToggler">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a
    //             className={
    //               currentPage === "About" ? "nav-link active" : "nav-link"
    //             }
    //             href="#about"
    //             onClick={() => handlePageChange("About")}
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className={
    //               currentPage === "Work" ? "nav-link active" : "nav-link"
    //             }
    //             href="#work"
    //             onClick={() => handlePageChange("Work")}
    //           >
    //             Work
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className={
    //               currentPage === "Contact" ? "nav-link active" : "nav-link"
    //             }
    //             href="#contact"
    //             onClick={() => handlePageChange("Contact")}
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //       <a className="btn btn-outline-secondary" type="btn">
    //         Resume
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Nav;
