import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    organisationType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  console.log(submitted,"................")
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
       await emailjs.send("service_oydgqi1", "template_0snqpgj", {
        firstName: formData.firstName,
        emailAddress: formData.emailAddress,
        phoneNumber: formData.phoneNumber,
        organisationType: formData.organisationType || "",
        message: formData.message || "",
      }, "nCO3AcICvW-hhC20K");
      setSubmitted(true);
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrorMessage("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
      
    }
  };

  const gradientTextStyle = {
    fontWeight: "bold",
    background: "linear-gradient(90deg, white 0%, pink 50%, gold 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };
  return (
    <>
      <div
        className="flex-column"
        style={{
          background: "linear-gradient(to bottom, #420394, #000000)",
          display: "flex",
        }}
      >
        <div
          className="container mt-5 "
          style={{ width: "90%", maxWidth: "1200px" }}
        >
          <NavBar />
          <div className="mt-2 rounded-3 text-center py-3 g-0">
            <h2
              className="position-relative d-inline-block "
              style={gradientTextStyle}
            >
              CONTACT US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                style={{
                  position: "absolute",
                  bottom: "-15px",
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
          </div>
        </div>
      </div>

      {submitted ? (<div className="d-flex justify-content-center align-items-center fw-semibold fs-3" style={{ height: "200px" }}>Our team will reach out to you shortly.</div>) : (<Container className="mt-5">
        <form onSubmit={handleSubmit}>
          <h4 className="fw-bold text-danger">CONTACT US</h4>
          <h2 className="fw-bold ">Speak to an expert</h2>
          <p className="my-3">We are here to answer your questions.</p>

          <Row className="g-sm-5">
            <Col md={6}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label fw-bold">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label fw-bold">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
          </Row>

          <Row className="g-sm-5">
            <Col md={6}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label fw-bold">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  className="form-control"
                  placeholder="+91"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Col>
          </Row>



          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Your Message
            </label>
            <textarea
              id="message"
              className="form-control"
              placeholder="Your message for us"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <h5 className="fw-light mb-4 ">
            Chargeback Zero prioritizes your privacy and is dedicated to
            safeguarding your personal information. We will utilize your data
            solely for managing your account and delivering the products and
            services you have requested. If you agree to allow us to contact you
            for these purposes, please indicate your consent by checking the box
            <span className="text-danger"> below</span>.
          </h5>

          <Row className="mb-3">
            <Col>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input border-2 border-black"
                  id="acceptPolicy"
                  required
                />
                <label htmlFor="acceptPolicy" className="form-check-label">
                  I accept Chargeback Zero privacy policy and agree to receive
                  communications for Web Shield*.
                </label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input border-2 border-dark"
                  id="keepInformed"
                  required
                />
                <label htmlFor="keepInformed" className="form-check-label">
                  Please keep me informed about Chargeback Zero products,
                  services, and events.
                </label>
              </div>
            </Col>
          </Row>

          <h5 className="fw-light my-4 ">
            You can unsubscribe from these communications at any time. For more
            information on how to unsubscribe, our privacy practices, and how we
            are committed to protecting and respecting your privacy, please
            review our <span className="text-danger">Privacy Policy</span>.
          </h5>
          <h5 className="fw-light my-4 ">
            By clicking submit below, you consent to allow Web Shield to store
            and process the personal information submitted above to provide you
            the content requested.
          </h5>

          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

          {/* Submit Button */}
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Container>)}

      <Footer />
    </>
  );
};

export default ContactUs;
