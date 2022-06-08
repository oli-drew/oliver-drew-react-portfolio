import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroImage from "./HeroImage";

// Sub-pages
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // Check value of `currentPage`. Then return component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <HeroImage />
      <main className="container">{renderPage()}</main>
      <Footer />
    </div>
  );
}
