import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../assets/ValidXPage/1.png";
import img from "../assets/ValidXPage/img.png";
import img1 from "../assets/ValidXPage/img1.png";
import img2 from "../assets/ValidXPage/img2.png";
import img3 from "../assets/ValidXPage/img3.png";
import img4 from "../assets/ValidXPage/img4.png";

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
              className="img-fluid"
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
    title: "Automated Underwriting ",
    img: img1,
    des: "Automated underwriting for immediate merchant approval offering rapid approvals and enhanced efficiency with speed, accuracy and customer experience",
    bgcolor: "#FFEFDA", // Adding bgcolor
  },
  {
    title: "Underwriting Dashboards ",
    img: img2,
    des: "Underwriting dashboards highlight key details for applications requiring additional review",
    bgcolor: "#F5EAFF", // Adding bgcolor
  },
  {
    title: "Flexible Integration ",
    img: img3,
    des: "Flexible Integration with any gateway or processor and ChargebackZero’s back office",
    bgcolor: "#FFF8F1", // Adding bgcolor
  },
  {
    title: "Customization",
    img: img4,
    des: "Tailor Onboarding requirements to suit your specific business needs",
    bgcolor: "#FFEAED", // Adding bgcolor
  },
];

const data1 = [
  {
    title: "Avoid Fraud Loss",
    des: "Detecting fraudulent & other problematic merchant activity through merchant URL analysis helps prevent fraud losses.",
    bgcolor: "#FFEFDA", // 1st item: color changed to #FFEFDA
  },
  {
    title: "Fewer Fines",
    des: "Failure to detect prohibited or money laundering activities by merchants puts the payment provider at risk of regulatory action, as well as fines by card brands.",
    bgcolor: "#F1E8FF", // 2nd item: color changed to #F1E8FF
  },
  {
    title: "Reduce Manual Review",
    des: "We help identify the 10% of cases that actually need further attention. You can redeploy the majority of your human analysts' time and skills elsewhere.",
    bgcolor: "#FFEAED", // 3rd item: color remains #FFEAED
  },
  {
    title: "Speed Up Time to Activation",
    des: "Ability to accept more prospective merchants, having the confidence that problematic behaviors will be caught before they cause problems.",
    bgcolor: "#FFEFDA", // 4th item: color changed to #FFEFDA
  },
  {
    title: "Customer Experience",
    des: "Help offer a high-quality customer experience while efficiently identifying SMB fraud, leading to increased customer satisfaction and loyalty.",
    bgcolor: "#F1E8FF", // 5th item: color changed to #F1E8FF
  },

  {
    title: "Data-Driven Decision",
    des: "To help make more informed decisions about whether to terminate or remediate merchants to align with the organization’s risk tolerance.",
    bgcolor: "#FFEAED", // 7th item: color remains #FFEAED
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
      <h4 className="text-center my-4">
        Underwriting dashboard, crafted by industry experts
      </h4>

      <img
        src={img}
        alt="Underwriting dashboard"
        style={{ maxWidth: "100%", height: "auto" }}
        className="img-fluid object-fit-contain "
      />

      <Row>
        <h3 className="text-center my-4">Key Features</h3>
        {data.map((item, i) => (
          <div key={i} className="col-md-6 mb-4 ">
            <Card
              style={{
                backgroundColor: item.bgcolor,
                borderColor: "whitesmoke",
              }}
              className="h-100   border border-5 "
            >
              <img
                src={item.img}
                className="object-fit-contain mt-3 "
                alt={item.title}
                style={{ height: "50px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{item.title}</h5>
                <p className="card-title text-center">{item.des}</p>
              </div>
            </Card>
          </div>
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
      <div>
        <h4 className="text-center fw-bold mt-4">Benefits </h4>

        <Row>
          {data1.map((section, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card
                className="h-100 text-center"
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
                  {section.title}
                </Card.Title>
                <Card.Body
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <p>{section.des}</p>
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
      <Helmet>
        <title>
          ValidX | Fast & Automated Merchant Onboarding & Underwriting
        </title>
        <meta
          name="description"
          content="ValidX offers a streamlined solution for rapid and automated merchant onboarding with KYB (Know Your Business) checks. Ideal for Payment Facilitators, Financial Institutions, and other businesses seeking secure and compliant onboarding solutions."
        />
        <meta
          name="keywords"
          content="merchant onboarding, automated underwriting, KYB, business verification, financial compliance, payment facilitators, financial institutions, secure onboarding"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ValidX Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (OG) meta tags for social sharing */}
        <meta
          property="og:title"
          content="ValidX | Fast & Automated Merchant Onboarding"
        />
        <meta
          property="og:description"
          content="ValidX simplifies merchant onboarding with fast, automated underwriting and KYB checks. Designed for Payment Facilitators and Financial Institutions to ensure seamless, secure processes."
        />
        <meta property="og:image" content={HeaderImg} />
        <meta
          property="og:url"
          content="https://master.d359u0ilif4b78.amplifyapp.com/solution/validX"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ValidX" />

        {/* Twitter meta tags for better engagement */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ValidX | Automated Merchant Onboarding & KYB"
        />
        <meta
          name="twitter:description"
          content="ValidX provides an automated and compliant solution for merchant onboarding with fast KYB checks. Tailored for financial institutions and businesses to simplify processes."
        />
        <meta name="twitter:image" content={HeaderImg} />

        {/* Canonical URL to avoid duplicate content */}
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

export default ValidXPage;
