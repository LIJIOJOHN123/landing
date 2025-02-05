import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../assets/CaseManagement/_Image_ (5).png";
import img from "../assets/CaseManagement/_Image_ (6).png";
import img1 from "../assets/CaseManagement/img1.png";
import icon1 from "../assets/CaseManagement/icon1.png";
import icon2 from "../assets/CaseManagement/icon2.png";
import icon3 from "../assets/CaseManagement/icon3.png";
import icon4 from "../assets/CaseManagement/icon4.png";

import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import ellipse1 from "../assets/Hero/ellipse2.png";
import ellipse3 from "../assets/Hero/ellipse3.png";
import Business from "../components/Business";
import Footer from "../components/Footer";
import IntegrationMadeEasy from "../components/IntegrationMadeEasy";
import NavBar from "../components/NavBar";

function Hero() {
  const navigate = useNavigate();
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
    <div
      id="/"
      className="pb-sm-3"
      style={{
        // height: "550px",
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
          <Col md={5}>
            <h2
              className="position-relative d-inline-block "
              style={gradientTextStyle}
            >
              Case Management
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
              A flexible case management system designed for efficient case
              review and decision-making. Enhance productivity by personalizing
              case reviews and workflows, centralizing customer data and
              communication, and enabling agent to take decisive action.
            </p>
            <div className="z-2  position-relative">
              <button
                onClick={() => {
                  navigate("/report");
                }}
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
            <p
              className=" text-white fw-light mt-2  ms-3 text-white-50"
              style={{ fontSize: "14px" }}
            >
              No credit card required
            </p>
          </Col>
          <Col className="d-none d-md-block position-relative">
            <img
              className="img-fluid mb-3"
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
  {
    icon: icon1,
    des: "A complete overview of business customers, incorporating third-party data.",
  },
  {
    icon: icon2,
    des: "Leverage data and analytics for effective analysis, monitoring, and auditing.",
  },
  {
    icon: icon3,
    des: "Efficiently manage user communication and information collection.",
  },
  {
    icon: icon4,
    des: "Foster collaboration among agents, roles, and departments.",
  },
];

const contentArray = [
  {
    category: "Digital KYC Stack",
    items: ["Digilocker with Analytics", "CKYC", "Aadhaar e-KYC", "KRA KYC"],
    bgcolor: "#FFEFDA", // 1st item
  },
  {
    category: "Video Validation Stack",
    items: [
      "Video KYC",
      "Video OTP Verification",
      "Self Video KYC",
      "Pre Issuance Verification Call",
    ],
    bgcolor: "#F1E8FF", // 2nd item
  },
  {
    category: "Onboarding - Face Validations",
    items: [
      "Liveness",
      "Face Match",
      "Face Deduplication",
      "Face Authentication",
    ],
    bgcolor: "#FFEAED", // 3rd item
  },
  {
    category: "ID Database Checks",
    items: [
      "Drivers License Verification",
      "Fetch PAN",
      "Passport Verification",
      "Voter ID verification",
    ],
    bgcolor: "#FFEFDA", // 4th item
  },
  {
    category: "AML Checks",
    items: [
      "AML Screening",
      "AML On-going Monitoring",
      "Digital Signature",
      "Aadhaar OTP eSign",
    ],
    bgcolor: "#F1E8FF", // 5th item
  },
  {
    category: "ID Checks & Data Extraction",
    items: [
      "OCR of Indian IDs - PAN, Voter ID, Aadhaar, Passport",
      "Quality Checks",
      "Fraud Checks",
    ],
    bgcolor: "#FFEAED", // 6th item
  },
  {
    category: "KYB / Entity Verification",
    items: [
      "Udyog Aadhaar Verification",
      "GSTN Verification",
      "Udyam Aadhaar Verification",
      "KB Documents OCR",
      "Shop Verification",
    ],
    bgcolor: "#FFEFDA", // 7th item
  },
  {
    category: "Address & Geo location",
    items: [
      "Geolocation for IP Address",
      "Reverse Geocoding",
      "Digital Contact Point Verification",
    ],
    bgcolor: "#F1E8FF", // 8th item
  },
  {
    category: "Financial Data & BG Validations",
    items: [
      "Bank Statement Analysis",
      "EPFO Verification",
      "Salary Slips OCR",
      "Credit Bureau Soft Pull",
      "Criminal and Court Case Verification",
    ],
    bgcolor: "#FFEAED", // 9th item
  },
  {
    category: "Bank Account Verification",
    items: ["Reverse Penny Drop", "Penny Drop", "Pennyless"],
    bgcolor: "#FFEFDA", // 10th item (new section)
  },
  {
    category: "Web Presence Review",
    items: [
      "Website Data",
      "Industry Classification",
      "Social Media Analysis",
      "Review Page Analysis",
      "Blocklisted Companies",
    ],
    bgcolor: "#F1E8FF", // 11th item (new section)
  },
  {
    category: "Advanced Solutions",
    items: [
      "Reverse Geocode",
      "AML Check",
      "AML Continuous Monitoring",
      "IP Address Spoofing",
      "CIBIL Defaulters List Check",
      "Instant Court Record Check & Many More",
    ],
    bgcolor: "#FFEAED", // 12th item (new section)
  },
];

const Body = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={5}>
          <h5 className="text-center fw-semibold mb-4">BACK OFFICE</h5>
          <Row className="">
            {" "}
            {/* Use g-4 for consistent spacing */}
            {data.map((item, i) => (
              <Col md={6} key={i}>
                <div className="text-center ">
                  <img
                    src={item.icon}
                    alt={`Icon ${i}`}
                    className="mb-2 img-fluid"
                  />{" "}
                  {/* Added img-fluid for responsive image */}
                  <p>{item.des}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <img src={img} className="img-fluid" alt="Additional" />{" "}
        </Col>
      </Row>
      <Row className="mt-5 g-0">
        <Col md={7} className="d-flex align-items-center">
          <img src={img1} className="img-fluid" alt="Additional" />{" "}
        </Col>
        <Col md={5}>
          <h5 className="fw-semibold mb-4">
            {" "}
            Streamlined Onboarding with Dynamic Data & Document Collection
          </h5>
          <p>
            Simplify your business verification process using a tailored Know
            Your Business(KYB) flow. Seamlessly request additional documents as
            needed, minimizing back-and-forth interactions. Streamline the
            collection of business information, ensuring a smooth and
            hassle-free verification experience for your clients.
          </p>
        </Col>
      </Row>
      <div>
        <h4 className="text-center mt-4">
          One integration for all of the business data you need
        </h4>
        <p className="text-center ">
          Integrate with multiple data sources, goverment lists, ID and document
          verification providers
        </p>

        <Row>
          {contentArray.map((section, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card
                className="h-100"
                style={{
                  borderRadius: "15px",
                  backgroundColor: section.bgcolor,
                }} // Added borderRadius here
              >
                <Card.Title
                  style={{
                    height: "30px",
                    borderTopLeftRadius: "15px", // Match the border radius
                    borderTopRightRadius: "15px", // Match the border radius
                  }}
                  className="text-center m-0 border border-white border-2"
                >
                  {section.category}
                </Card.Title>
                <Card.Body
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <ul className=" text-center text-sm-start">
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

function CaseManagement() {
  return (
    <div>
      <Helmet>
        <title>ValidX - Merchant Underwriting & Onboarding</title>
        <meta
          name="description"
          content="ValidX streamlines merchant onboarding with rapid, automated underwriting and Know Your Business (KYB) checks. Tailored for Payment Facilitators, Financial Institutions, and Companies seeking efficient and secure onboarding solutions."
        />
        <meta
          name="keywords"
          content="merchant onboarding, underwriting, KYB, financial institutions, automated checks, merchant onboarding solutions, business verification, financial compliance"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ValidX Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="ValidX - Merchant Underwriting & Onboarding"
        />
        <meta
          property="og:description"
          content="ValidX streamlines merchant onboarding with rapid, automated underwriting and Know Your Business (KYB) checks, designed for Payment Facilitators and Financial Institutions, ensuring a seamless and secure process."
        />
        <meta property="og:image" content={HeaderImg} />
        <meta
          property="og:url"
          content="https://master.d359u0ilif4b78.amplifyapp.com/solution/validX"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ValidX" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ValidX - Merchant Underwriting & Onboarding"
        />
        <meta
          name="twitter:description"
          content="ValidX provides a streamlined solution for merchant onboarding with automated underwriting and KYB checks. Ideal for Payment Facilitators and Financial Institutions."
        />
        <meta name="twitter:image" content={HeaderImg} />
        <link
          rel="canonical"
          href="https://master.d359u0ilif4b78.amplifyapp.com/solution/validX"
        />
      </Helmet>

      <Hero />
      <Body />
      <Business />
      <IntegrationMadeEasy />
      <Footer />
    </div>
  );
}

export default CaseManagement;
