import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../assets/DisputeXPage/hero.png";

import ellipse from "../assets/Hero/ellipse.png";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import img from "../assets/DisputeXPage/img.png";
import logo1 from "../assets/DisputeXPage/logo1.png";
import logo2 from "../assets/DisputeXPage/logo2.png";
import logo3 from "../assets/DisputeXPage/logo3.png";
import logo4 from "../assets/DisputeXPage/logo4.png";
import ellipse1 from "../assets/Hero/ellipse2.png";
import ellipse3 from "../assets/Hero/ellipse3.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Business from "../components/Business";
import IntegrationMadeEasy from "../components/IntegrationMadeEasy";

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
      style={{
        display: "flex",
        background: "linear-gradient(to bottom, #420394, #000000)",
      }}
    >
      <div
        className="container mt-5 "
        style={{ width: "90%", maxWidth: "1200px" }}
      >
        <NavBar />
        <Row className="mt-5   g-0">
          <Col>
            <h2
              className="position-relative d-inline-block "
              style={gradientTextStyle}
            >
              Recover Chargebacks
              <div>on Autopilot</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                style={{
                  position: "absolute",
                  bottom: "-35px",
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
                alt="Chargeback Recovery Automation"
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
              ChargebackZero’s Dispute Automation provides a comprehensive
              approach to managing chargebacks, streamling the dispute process
              for businesses. The system is designed to ensure that responses to
              disputes are precise, complete, and submitted on time, thereby
              reducing the likelihood of human error.
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
  {
    text: "Chargeback Automation efficiently retrieves data and evidence from your payment processor, streamlining the process and saving you time on data collection.",
    backgroundColor: "#FEFBF2", // Light blue
  },
  {
    text: "Our automated system takes care of generating and submitting responses for you, handling incoming chargebacks seamlessly and effortlessly.",
    backgroundColor: "#EFEAFF", // Light green
  },
  {
    text: "We don’t charge any fixed fees! Our compensation is directly tied to your success, which drives us to consistently enhance your win rate.",
    backgroundColor: "#FFEEFE", // Light red
  },
];
const data1 = [
  {
    text: "Intuitive dashboard and real-time statistics to simplify managing and understanding your chargebacks. Master your dispute navigation with ease.",
    img: logo1,
    bgcolor: "#FFEFDA", // Added bgcolor
  },
  {
    text: "Comprehensive response templates handle the heavy lifting for you by automatically integrating essential information such as shipping details, customer payment histories, and much more.",
    img: logo2,
    bgcolor: "#F1E8FF", // Added bgcolor
  },
  {
    text: "Manual review options and fraud scoring guarantee that complex cases receive human attention, while all other processes can be automated.",
    img: logo3,
    bgcolor: "#FFEAED", // Added bgcolor
  },
  {
    text: "Seamlessly integrate with our secure API to achieve end-to-end automation. Ensure you never miss a deadline or response.",
    img: logo4,
    bgcolor: "#EFEAFF", // Added bgcolor
  },
];

const BenifitsArray = [
  {
    title: "Maximize Revenue Recovery",
    description: "Automated systems enhance dispute response success rates, helping merchants recover lost revenue.",
    bgcolor: "#FFEFDA", // Color as seen in the image
  },
  {
    title: "Lower Chargeback Ratio",
    description: "Timely and consistent responses to invalid chargebacks reduce overall chargeback ratios.",
    bgcolor: "#F1E8FF", // Color as seen in the image
  },
  {
    title: "Operational Efficiency",
    description: "Automation streamlines the dispute process, freeing up staff for more strategic initiatives.",
    bgcolor: "#FFEBED", // Color as seen in the image
  },
  {
    title: "Minimize Costs",
    description: "Automated solutions can be up to 45% cheaper than manual management, reducing the need for large teams.",
    bgcolor: "#FFEFDA", // Color as seen in the image
  },
  {
    title: "Fraud Detection and Prevention",
    description: "Advanced analytics identify patterns to help prevent future fraud and disputes.",
    bgcolor: "#F1E8FF", // Color as seen in the image
  },
  {
    title: "Improve Customer Satisfaction",
    description: "Faster resolutions lead to better customer experiences, even during disputes.",
    bgcolor: "#FFEBED", // Color as seen in the image
  },
];

const Body = () => {
  return (
    <Container>
      <h4 className="text-center my-3">How It Works</h4>
      <Row>
        {data.map((item, i) => (
          <Col key={i} md={4} className="mb-4">
            <Card
              className="h-100"
              style={{
                backgroundColor: item.backgroundColor,
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Body>
                <p className="text-center">{item.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <h4 className="text-center my-4">Key Features</h4>
        <Row className="justify-content-center " style={{ marginTop: "70px" }}>
          {data1.slice(0, 2).map((item, i) => (
            <Col key={i} md={6} className="mb-4 d-flex justify-content-center">
              <Card
                style={{
                  backgroundColor: item.bgcolor,
                  borderRadius: "10px",
                  paddingTop: "20px",
                  position: "relative",
                }}
                className="h-100  d-flex flex-column align-items-center text-center"
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      top: "-40px",
                      width: "80px",
                      height: "80px",
                      backgroundColor: item.bgcolor,
                      border: "5px ",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`Image ${i}`}
                      className="img-fluid p-2"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  {/* Text Content */}
                  <p className=" ">{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-4">
          {data1.slice(2).map((item, i) => (
            <Col key={i} md={6} className="mb-4 d-flex justify-content-center">
              <Card
                style={{
                  backgroundColor: item.bgcolor,
                  borderRadius: "10px",
                  paddingTop: "20px", // Padding to allow space for the image
                  position: "relative",
                }}
                className="h-100 d-flex flex-column align-items-center text-center"
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      top: "-40px",
                      width: "80px",
                      height: "80px",
                      backgroundColor: item.bgcolor,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`Image ${i}`}
                      className="img-fluid p-2"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  {/* Text Content */}
                  <p className=" ">{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h4 className="text-center fw-bold">ChargebackZero Advantage</h4>
        <p className="text-center m-0">
          Your one stop solution to prevent chargebacks, save sales, improve
          customer experiences
        </p>

        <p className="text-center "> and reduce future fraud</p>
        <img src={img} className="img-fluid my-3 " />
      </div>

      <div>
        <h4 className="text-center fw-bold mt-4">Benefits </h4>

        <Row>
          {BenifitsArray.map((section, index) => (
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
                  <p>{section.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
function DisputeXPage() {
  return (
    <div>
      <Helmet>
        <title>DisputeX - Efficient Chargeback Recovery</title>
        <meta
          name="description"
          content="DisputeX automates chargeback recovery with precision and efficiency, reducing human error and ensuring timely responses. Discover how our system streamlines dispute management for businesses."
        />
        <meta
          name="keywords"
          content="chargeback recovery, dispute automation, payment processor, business management"
        />
        <meta
          property="og:title"
          content="DisputeX - Efficient Chargeback Recovery"
        />
        <meta
          property="og:description"
          content="DisputeX automates chargeback recovery with precision and efficiency, reducing human error and ensuring timely responses. Discover how our system streamlines dispute management for businesses."
        />
        <meta property="og:image" content={HeaderImg} />
        <meta
          property="og:url"
          content="https://master.d359u0ilif4b78.amplifyapp.com/solution/disputex"
        />
        <meta
          property="twitter:title"
          content="DisputeX - Efficient Chargeback Recovery"
        />
        <meta
          property="twitter:description"
          content="DisputeX automates chargeback recovery with precision and efficiency, reducing human error and ensuring timely responses. Discover how our system streamlines dispute management for businesses."
        />
        <meta property="twitter:image" content={HeaderImg} />
        <link
          rel="canonical"
          href="https://master.d359u0ilif4b78.amplifyapp.com/solution/disputex"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "DisputeX - Efficient Chargeback Recovery",
      "description": "DisputeX automates chargeback recovery with precision and efficiency, reducing human error and ensuring timely responses. Discover how our system streamlines dispute management for businesses.",
      "url": "https://master.d359u0ilif4b78.amplifyapp.com/solution/disputex",
      "image": "${HeaderImg}"
    }
    `}
        </script>
      </Helmet>
      <Hero />
      <Body />
      <Business />
      <IntegrationMadeEasy />
      <Footer />
    </div>
  );
}

export default DisputeXPage;
