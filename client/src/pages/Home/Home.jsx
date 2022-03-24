import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/Hero";
import PropertiesOverview from "../../components/PropertiesOverview/PropertiesOverview";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";
import Testimonials from "../../components/Testimonials/Testimonials";
import NavSide from "../../components/NavSide/NavSide";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeroSection toggle={toggle} />
      <NavSide isOpen={isOpen} toggle={toggle} />
      <Overview />
      <PropertiesOverview />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
