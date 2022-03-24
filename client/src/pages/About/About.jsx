import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import AboutRivas from "../../components/AboutRivas/AboutRivas";
import Vision from "../../components/Vision/Vision";
import NavSide from "../../components/NavSide/NavSide";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <NavSide isOpen={isOpen} toggle={toggle} />
      <AboutRivas />
      <Vision />
      <Footer />
    </>
  );
};

export default About;
