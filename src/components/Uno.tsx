import React from "react";
import Hero from "./Hero";
import Nav from "./Navbar";
import Info from "./Info";
import Wedo from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Uno = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Info />
      <Wedo />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Uno;
