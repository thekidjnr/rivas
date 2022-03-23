import React from "react";
import HeroSection from "../../components/HeroSection/Hero";
import PropertiesOverview from "../../components/PropertiesOverview/PropertiesOverview";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Overview />
      <PropertiesOverview />
      <Footer />
    </>
  );
};

export default Home;
