import React from "react";
import { Col, Row } from "react-bootstrap";
import HeaderImg from "../assets/Hero/file.png";
import NavBar from "./NavBar";
import ellipse from "../assets/Hero/ellipse.png";
import ellipse1 from "../assets/Hero/ellipse2.png";
import ellipse3 from "../assets/Hero/ellipse3.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate()

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
    <div
      id="/"
      style={{
        height: "550px",
        display: "flex",
        background: "linear-gradient(to bottom, #420394, #000000)" }}
      
    >
      <div
        className="container mt-5"
        style={{ width: "90%", maxWidth: "1200px" }}
      >
        <NavBar />
        <Row className="mt-4 g-0">
          <Col>
            <h2 className="text-white">
              Ultimate All-in-One
              <span style={{ color: "#FFE55C" }}> Platform for </span>
            </h2>
            <h2
              className="position-relative d-inline-block"
              style={gradientTextStyle}
            >
              Merchant Underwriting
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                style={{
                  position: "absolute",
                  bottom: "-25px",
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
                  strokeWidth="1"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </h2>

            <div style={{ position: "relative" }}>
              <img
                className="position-absolute"
                style={{ objectFit: "contain", width: "100px" }}
                src={ellipse1}
                alt="API illustration"
              />
            </div>
            <img
              className="position-absolute d-none d-lg-block"
              style={{
                marginTop: "-130px",
                objectFit: "contain",
                width: "90px",
                left: "360px",
              }}
              src={ellipse3}
              alt="API illustration"
            />

            <p className="mt-5 text-white">
              For Software Platforms, Payment Companies, Payment Facilitators
              and Financial Institutions
            </p>
            <div className="">
              <button
                style={{
                  marginRight: "20px",
                  background: "linear-gradient(90deg, #8A2BE2, purple, gold)",
                  color: "white",
                  transition:
                    "background-color 0.3s ease-in-out, transform 0.2s ease",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  width: "200px",
                }}
                className="border-white btn btn-dark btn-lg rounded mb-3 mb-sm-0"
              >
                Get Started Free
              </button>
              <button
                onClick={() => {
                  navigate("/book-a-demo");
                }}
                style={{
                  backgroundColor: "#8A2BE2",
                  cursor: "pointer",
                  width: "200px",
                }}
                className="border-white btn btn-dark btn-lg rounded"
              >
                Book A Demo
              </button>
            </div>
            <p className=" text-white fw-light mt-2">No credit card required</p>
          </Col>
          <Col className="d-none d-md-block position-relative">
            <img
              className="position-absolute z-1 img-fluid"
              style={{
                marginTop: "165px",
                objectFit: "cover",
                maxWidth: "100%",
                width: "auto",
                maxHeight: "100%",
              }}
              src={ellipse}
              alt="API illustration"
            />
            <img
              className="img-fluid z-5"
              style={{
                objectFit: "contain",
                maxWidth: "100%",
              }}
              src={HeaderImg}
              alt="API illustration"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Hero;
