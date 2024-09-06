import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../assets/Hero/file.png";
import img from "../assets/ValidXPage/img.png";

import ellipse from "../assets/Hero/ellipse.png";
import ellipse1 from "../assets/Hero/ellipse2.png";
import ellipse3 from "../assets/Hero/ellipse3.png";
import NavBar from "../components/NavBar";
import Business from "../components/Business";
import IntegrationMadeEasy from "../components/IntegrationMadeEasy";
import Footer from "../components/Footer";
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
        background: "linear-gradient(to bottom, #420394, #000000)",
      }}
    >
      <div
        className="container mt-5"
        style={{ width: "90%", maxWidth: "1200px" }}
      >
        <NavBar />
        <Row className="mt-4 g-0">
          <Col>
            <h2
              className="position-relative d-inline-block "
              style={gradientTextStyle}
            >
              Merchant Underwriting & Onboarding
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                style={{
                  position: "absolute",
                  bottom: "-55px",
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
              ValidX streamlines merchant onboarding with rapid, automated
              underwriting and Know Your Business (KYB) checks.ompanies, Payment
              Facilitators and Financial Institutions
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

const data = [
  "Automated Underwriting for immediate Merchant Approval",
  "Underwriting Dashboards Highlight key Details for Applications Requiring Additional Review",
  "Flexible Integration with Any Gateway or Processor and ChargebackZero’s Back Office",
  "Tailor Onboarding Requirements to Suit Your Specific Business Needs",
];

const contentArray = [
  {
    category: "Digital KYC Stack",
    items: ["Digilocker with", " Analytics", "CKYC", "Aadhaar e-KYC"],
  },
  {
    category: "Video Validation Stack",
    items: [
      "Video KYC",
      "Video OTP Verification",
      "Self Video KYC",
      "Pre Issuance Verification",
    ],
  },
  {
    category: "Onboarding - Face Validations",
    items: ["Liveness", "Face Match", "Face Deduplication", "Face"],
  },
  {
    category: "ID Database Checks",
    items: [
      "Drivers License",
      "Verification",
      "Fetch PAN",
      "Passport Verification",
    ],
  },
  {
    category: "AML Checks",
    items: [
      "AML Screening",
      "AML On going Monitoring",
      "Digital Signature",
      "Aadhaar OTP eSign",
    ],
  },
  {
    category: "ID Checks & Data Extraction",
    items: [
      "OCR of Indian IDs - PAN, Voter",
      " ID",
      "Aadhaar, Passport",
      "Quality Checks",
    ],
  },
  {
    category: "KYB / Entity Verification",
    items: [
      "Udyog Aadhaar",
      " Verification",
      "GSTN Verification",
      "Udyam Aadhaar ",
      "Verification",
    ],
  },
  {
    category: "Address & Geo location",
    items: [
      "Geolocation for IP Address",
      "Reverse Geocoding",
      "Digital Contact Point",
    ],
  },
  {
    category: "Financial Data & BG Validations",
    items: [
      "Bank Statement Analysis",
      "EPFO Verification",
      "Salary Slips OCR",
      "Credit Bureau Soft Pull",
      "Criminal and Court Case",
    ],
  },
  {
    category: "Bank Account Verification",
    items: ["Reverse Penny", "Drop", "Penny Drop"],
  },
  {
    category: "Web Presence Review",
    items: [
      "Website Data",
      "Industry Classification",
      "Social Media Analysis",
      "Review Page Analysis",
      "Location Assessment",
      "Blocklisted",
    ],
  },
  {
    category: "Advanced Solutions",
    items: [
      "Reverse Geocode",
      "AML Check",
      "AML Continuous Monitoring",
      "IP Address Spoofing",
      "CIBIL Defaulters List check",
      "Instant Court Record Check & many more",
    ],
  },
];

const Body = () => {
  return (
    <Container>
      <h4 className="text-center my-4">
        Underwriting dashboard, crafted by industry experts
      </h4>

      <img
        src={img}
        alt="Underwriting dashboard"
        style={{ maxWidth: "100%", height: "auto" }}
        className="img-fluid object-fit-contain"
      />

      <Row className="mt-4 g-4">
        {data.map((item, index) => (
          <Col
            key={index}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              style={{
                backgroundColor: "#ede7ff",
                padding: "20px",
                borderRadius: "3px",
                height: "100px",
                width: "100%",
                borderColor: "#f2f7ff",
              }}
              xs={12}
              sm={6}
              className="d-flex align-items-center justify-content-center border border-4 text-center"
            >
              {item}
            </div>
          </Col>
        ))}
      </Row>

      <div>
        <h4 className="text-center mt-4">Plug-&-Play APIs:</h4>
        <h5 className="text-center mb-4 fw-normal">
          Access our library of 200+ APIs for all onboarding use-cases
        </h5>

        <Row>
          {contentArray.map((section, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card
                className="h-100"
                style={{ borderRadius: "15px" }} // Added borderRadius here
              >
                <Card.Title
                  style={{
                    background: "linear-gradient(gold, #A140FF)",
                    color: "white",
                    height: "30px",
                    borderTopLeftRadius: "15px", // Match the border radius
                    borderTopRightRadius: "15px", // Match the border radius
                  }}
                  className="text-center m-0"
                >
                  {section.category}
                </Card.Title>
                <Card.Body
                  className="text-white"
                  style={{
                    backgroundColor: "#5345FF",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <ul className="list-unstyled text-center text-sm-start">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

function ValidXPage() {
  return (
    <div>
      <Hero />
      <Body />
      <Business />
      <IntegrationMadeEasy />
      <Footer />
    </div>
  );
}

export default ValidXPage;
