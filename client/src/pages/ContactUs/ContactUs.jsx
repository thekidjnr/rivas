import React, { useState } from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Navbar from "../../components/NavBar/Navbar";
import NavSide from "../../components/NavSide/NavSide";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (toggle) => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <NavSide isOpen={isOpen} toggle={toggle} />
      <Contact />
      <Form />
      <Footer />
    </>
  );
};

export default ContactUs;
