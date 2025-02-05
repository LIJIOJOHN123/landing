import React from "react";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import CompanyName from "../components/CompanyName";
import Websites from "../components/Websites";
import Business from "../components/Business";
import IntegrationMadeEasy from "../components/IntegrationMadeEasy";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import HeaderImg from "../assets/Hero/file.png";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>ChargebackZero - Home</title>
        <meta
          name="description"
          content="Welcome to ChargebackZero, your premier solution for chargeback management and fraud prevention. Explore our advanced tools and services designed to reduce chargebacks, enhance fraud detection, and improve financial performance."
        />
        <meta
          name="keywords"
          content="chargeback management, fraud prevention, chargeback reduction, fraud detection, financial performance, risk management"
        />
        <meta name="author" content="ChargebackZero Team" />
        <meta property="og:title" content="ChargebackZero - Home" />
        <meta
          property="og:description"
          content="ChargebackZero provides top-notch solutions for managing and preventing chargebacks. Discover how our services can help you reduce chargebacks and improve your financial outcomes."
        />
        <meta property="og:image" content={HeaderImg} />
        <meta
          property="og:url"
          content="https://master.d359u0ilif4b78.amplifyapp.com/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={HeaderImg} />
        <meta name="twitter:title" content="ChargebackZero - Home" />
        <meta
          name="twitter:description"
          content="Discover ChargebackZero's advanced chargeback management and fraud prevention solutions. Learn how we can help you minimize chargebacks and enhance financial performance."
        />
        <meta name="twitter:image" content={HeaderImg} />
        <link
          rel="canonical"
          href="https://master.d359u0ilif4b78.amplifyapp.com/"
        />
      </Helmet>

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
