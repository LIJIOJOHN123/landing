import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import img1 from "../assets/WhyusPage/img1.png";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const AboutUs = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const gradientTextStyle = {
    fontWeight: "bold",
    background: "linear-gradient(90deg, white 0%, pink 50%, gold 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
    display: "inline-block",
  };
  return (
    <>
      <div
        className="flex-column"
        style={{
          background: "linear-gradient(to bottom, #420394, #000000)",
          display: "flex",
          height: "300px",
        }}
      >
        <div
          className="container mt-5 "
          style={{ width: "90%", maxWidth: "1200px" }}
        >
          <NavBar />
          <div className="mt-2 rounded-3 text-center py-3  g-0">
            <h2
              className="position-relative d-inline-block "
              style={gradientTextStyle}
            >
              RISK AND COMPLIANCE SOLUTIONS FOR FINANCILAL INSTITUTIONS AND
              ONLINE PLATFORMS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                style={{
                  position: "absolute",
                  bottom: "-75px",
                  left: "0",
                  width: "100%",
                  height: "auto",
                }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "white", stopOpacity: 1 }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: "pink", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "gold", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 5 H 50 Q 75 5, 100 8"
                  stroke="url(#gradient)"
                  strokeWidth=".4"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
          </div>
        </div>
      </div>
      <Container className="text-center my-3">
        <h5>
          We transform raw data into actionable strategies, standing as the
          premier experts in risk and compliance business intelligence. Our
          innovative approaches ensure the utmost protection for our clients
        </h5>
        <h4 className="mt-5">OUR TEAM</h4>
        <p>
          Our team brings together extensive expertise in developing risk,
          compliance, and anti-fraud systems, honed over decades at top-tier
          organizations including Amazon, HSBC, PhonePe, Razorpay, and Noon.
        </p>
        <img src={img1} className="img-fluid" />
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
