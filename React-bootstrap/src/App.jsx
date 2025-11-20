import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Carousel />
        <About />
        <Packages />
        <Testimonials />
        <Accordion />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
