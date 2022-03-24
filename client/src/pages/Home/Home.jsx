import React from "react";
import HeroSection from "../../components/HeroSection/Hero";
import PropertiesOverview from "../../components/PropertiesOverview/PropertiesOverview";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Overview />
      <PropertiesOverview />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
