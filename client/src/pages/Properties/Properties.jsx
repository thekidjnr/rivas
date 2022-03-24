import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Apartments from "../../components/Apartments/Apartments";
import Footer from "../../components/Footer/Footer";
import NavSide from "../../NavSide/NavSide";

const Properties = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <NavSide isOpen={isOpen} toggle={toggle} />
      <Apartments />
      <Footer />
    </>
  );
};

export default Properties;
