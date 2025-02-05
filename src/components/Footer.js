import React from "react";
import logo from "../assets/Footer/logo.png";
import location from "../assets/Footer/location.png";
import logo1 from "../assets/Footer/6d.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PCI from "../assets/Footer/PCI.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for a smooth scroll effect
    });
  };
  return (
    <footer
      className="bg-dark text-white mt-3 pt-1"
      style={{ fontSize: "12px" }}
    >
      <Container>
        {/* Logo Row */}

        {/* Location Row */}
        <Row className="mt-5 align-items-center">
          <Col xs={12} md={1} className="text-center text-md-start">
            <img
              src={location}
              alt="Location Icon"
              className="img-fluid"
              style={{ maxWidth: "50px" }}
            />
          </Col>
          <Col xs={12} md={11}>
            <div className="d-flex flex-column align-items-center align-items-md-start position-relative">
              <h5 className="text-white mb-2">LOCATIONS</h5>
              <hr className="my-1 text-white w-100" />
              <ul className="list-inline mb-0 text-white d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="list-inline-item border-end pe-3 me-3">India</li>
                <li className="list-inline-item border-end pe-3 me-3">USA</li>
                <li className="list-inline-item border-end pe-3 me-3">UAE</li>
                <li className="list-inline-item border-end pe-3 me-3">
                  Indonesia
                </li>
                <li className="list-inline-item pe-3 me-3">South Africa</li>
              </ul>
              <img
                className="position-absolute d-none d-sm-block "
                src={PCI}
                alt="Venture "
                style={{ maxWidth: "80px", top: "100%", right: "20%" }}
              />
            </div>
          </Col>
          <Col>
            {" "}
            <div
              xs={12}
              md={6}
              className="text-center text-md-end mt-3 mt-md-0"
            >
              A Venture By:{" "}
              <img
                src={logo1}
                alt="Venture Logo"
                style={{ maxWidth: "100px" }}
              />
            </div>
          </Col>
        </Row>

        {/* Navigation Links Row */}
        <Row className="mt-5">
          <Col
            xs={12}
            md={8}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
              <Link
                to="/"
                onClick={scrollToTop}
                className="me-4 mb-2 mb-md-0 text-decoration-none text-white "
              >
                SOLUTIONS
              </Link>

              <Link
                to="/about-us"
                className="me-4 mb-2 mb-md-0 text-decoration-none text-white"
              >
                ABOUT US
              </Link>
              <Link
                to="/blog"
                className="me-4 mb-2 mb-md-0 text-decoration-none text-white"
              >
                BLOG
              </Link>
              <Link
                to="/contact-us"
                className="me-4 mb-2 mb-md-0 text-decoration-none text-white"
              >
                CONTACT US
              </Link>
            </div>
          </Col>

          {/* Social Media Icons Row */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://www.youtube.com/watch?v=ddHqBrCs_Cs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/chargebackzero/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram rounded-circle border border-white px-2 py-1 text-white"></i>
              </a> */}
              <a
                href="https://www.facebook.com/ChargebackZero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Separator */}
        <hr className="my-3 text-white" />

        {/* Footer Bottom Row */}
        <Row className="mt-3">
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link
                to="/privacy"
                className="border-end pe-3 mb-0 text-decoration-none text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/terms-conditions"}
                className="ps-3 mb-0 text-decoration-none text-white"
              >
                Terms of Use
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end mb-4">
            <p className="mb-0">© 2024 ChargebackZero</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
