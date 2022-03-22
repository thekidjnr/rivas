import React from "react";
import HeroSection from "../../components/HeroSection/Hero";
import AboutRivas from "../../components/AboutRivas/AboutRivas";
import PropertiesOverview from "../../components/PropertiesOverview/PropertiesOverview";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutRivas />
      <PropertiesOverview />
      <Footer />
    </>
  );
};

export default Home;
