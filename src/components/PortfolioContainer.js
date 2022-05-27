import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import HeroImage from "./HeroImage";
import AboutMe from "./AboutMe";
import WorkShowcase from "./WorkShowcase";

// Sub-pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Check value of `currentPage`. Then return component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      console.log("home");
      return <Home />;
    }
    if (currentPage === "About") {
      console.log("about");
      return <About />;
    }
    if (currentPage === "Work") {
      console.log("work");
      return <Work />;
    }
    if (currentPage === "Contact") {
      console.log("contact");
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <HeroImage />
      <main className="container">{renderPage()}</main>
      <Footer />
    </div>
  );
}
