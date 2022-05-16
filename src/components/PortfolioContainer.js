import React, { useState } from "react";
import Nav from "./Nav";
import HeroImage from "./HeroImage";
import AboutMe from "./AboutMe";
import WorkShowcase from "./WorkShowcase";
import WorkProjects from "./WorkProjects";

// Sub-pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Check value of `currentPage`. Depending on the value of currentPage, we return the corresponding component to render.
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
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <HeroImage />
        <AboutMe />
        <WorkShowcase />
        <WorkProjects />
      </main>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
