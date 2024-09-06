import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../assets/MonitorXPage/headerImg.png";

import ellipse from "../assets/Hero/ellipse.png";

import ellipse1 from "../assets/Hero/ellipse2.png";
import ellipse3 from "../assets/Hero/ellipse3.png";
import img1 from "../assets/MonitorXPage/img1.png";
import img2 from "../assets/MonitorXPage/img2.png";
import img3 from "../assets/MonitorXPage/img3.png";
import img4 from "../assets/MonitorXPage/img4.png";
import img5 from "../assets/MonitorXPage/img5.png";
import img6 from "../assets/MonitorXPage/img6.png";
import img7 from "../assets/MonitorXPage/img7.png";
import img8 from "../assets/MonitorXPage/img8.png";
import img9 from "../assets/MonitorXPage/img9.png";
import img10 from "../assets/MonitorXPage/img10.png";
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
              Monitor Merchant Websites for changes Automatically
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
              Monitor acts like 24/7 CCTV monitoring your entire merchant
              portfolio for non-compliant and brand-damaging content
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
            <p className=" text-white fw-light mt-2 mx-3">
              No credit card required
            </p>
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

const contentArray = [
  {
    title: "Monitor",
    description:
      "Closely Monitor Merchants for Card Schemes, Acquirers, and PSPs: Track Products, Services, and Content Classification on Merchant Websites.",
    bgcolor: "#FFF0DA", // light beige background
    img: img1,
  },
  {
    title: "Portfolio Analytics",
    img: img2,
    description:
      "CBZero portal delivers visual snapshots of your portfolio’s performance, focusing on top-reported content violations.",
    bgcolor: "#EDE7FF", // light lavender background
  },
  {
    title: "Transaction Laundering Detection",
    img: img3,
    description:
      "Reveal hidden connections between your merchants and networks selling violating content to ensure portfolio compliance and avoid costly fines.",
    bgcolor: "#F6EBFF", // light pink background
  },
  {
    title: "Risk Policy Configuration",
    img: img4,
    description:
      "Get Alerts for Terms of Service and Region-Based Violations Tailored to Your Portfolio Needs.",
    bgcolor: "#FFF9F2", // light cream background
  },
  {
    title: "Portal and API Access",
    img: img5,
    description:
      "Submit merchants, receive content violations, and apply case actions via API or through our user-friendly CBZero portal.",
    bgcolor: "#F2E8FF", // light purple background
  },
  {
    title: "Expert Review",
    img: img6,
    description:
      "Every Violation Identified by CBZero Technology is validated by tenured risk experts, ensuring your team focuses on genuine issues, not false positives.",
    bgcolor: "#FFEBEE", // light pink background
  },
];
const BenifitsArray = [
  {
    title: "Regulatory Compliance",
    description:
      "Ensure merchants follow card network and government regulations",
    img: img7,
  },
  {
    title: "Custom Reporting",
    img: img8,
    description:
      "Receive tailored alerts and stay updated on relevant terms of services and regional violations",
  },
  {
    title: "Operational Efficiency",
    img: img9,
    description:
      "Streamine internal process to allow risk teams to focus on strategic decision",
  },
  {
    title: "Data Driven Decision",
    img: img10,
    description:
      "Monitor high risk categories balancing risk assessment with growth opportunities",
  },
];

const Body = () => {
  return (
    <Container>
      <h5 className="text-center my-3">
        ChargebackZero’s advanced analytics, rules engine, and risk models
        detect alternations in merchant profiles and alert you to emerging
        transactional risk factors that may modify the merchant’s initial risk
        assessment
      </h5>
      <h4 className="text-center mb-3">Key Features</h4>
      <div className="p-3">
        <Row>
          {contentArray.map((item, i) => (
            <div key={i} className="col-md-4 mb-4">
              <Card
                className="h-100"
                style={{
                  backgroundColor: item.bgcolor,
                }}
              >
                <img
                  src={item.img}
                  className="object-fit-contain mt-3"
                  alt={item.title}
                  style={{ height: "50px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>
                  <p className="card-title text-center">{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </Row>
      </div>
      <div>
        <h4 className="text-center">Benefits of Monitoring</h4>
        <div className="p-3 ">
          <Row>
            {BenifitsArray.map((item, i) => (
              <div key={i} className="col-md-6 mb-4 ">
                <Card style={{ backgroundColor: "#5345FF", borderColor:"#F2F7FF" }}  className="h-100   border border-5 text-white">
                  <img
                    src={item.img}
                    className="object-fit-contain mt-3"
                    alt={item.title}
                    style={{ height: "50px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-title text-center">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

function MonitorXPage() {
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

export default MonitorXPage;
