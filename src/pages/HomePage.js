import React from "react";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import CompanyName from "../components/CompanyName";
import Websites from "../components/Websites";
import Business from "../components/Business";
import IntegrationMadeEasy from "../components/IntegrationMadeEasy";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Hero />
      <FeatureList />
      <CompanyName />
      <Websites />
      <Business />
      <IntegrationMadeEasy />
      <Footer />
    </div>
  );
}

export default HomePage;
