import React from "react";
import logo from "../assets/Footer/logo.png";
import location from "../assets/Footer/location.png";
import logo1 from "../assets/Footer/6d.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-3" style={{ fontSize: "12px" }}>
      <Container>
        <Row className="pt-3 align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <img src={logo} alt="nkj" style={{ maxWidth: "150px" }} />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end mt-3 mt-md-0">
            A Venture By: <img src={logo1} alt="nkj" style={{ maxWidth: "100px" }} />
          </Col>
        </Row>

        <Row className="mt-5 align-items-center">
          <Col xs={12} md={2} className="text-center text-md-start">
            <img src={location} alt="location" className="img-fluid" style={{ maxWidth: "50px" }} />
          </Col>
          <Col xs={12} md={10}>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <h5 className="text-white mb-2">LOCATIONS</h5>
              <hr className="my-1 text-white" />
              <ul className="list-inline mb-0 text-white d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="list-inline-item border-end pe-4 mx-2">India</li>
                <li className="list-inline-item border-end pe-4 mx-2">USA</li>
                <li className="list-inline-item border-end pe-4 mx-2">UAE</li>
                <li className="list-inline-item border-end pe-4 mx-2">Indonesia</li>
                <li className="list-inline-item border-end pe-4 mx-2">South Africa</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} md={8} className="text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
              <p className="me-4 mb-2 mb-md-0">SOLUTIONS</p>
              <p className="me-4 mb-2 mb-md-0">WHY US</p>
              <p className="me-4 mb-2 mb-md-0">ABOUT US</p>
              <p className="me-4 mb-2 mb-md-0">BLOGS</p>
              <p className="me-4 mb-2 mb-md-0">CONTACT US</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook rounded-circle border border-white px-2 py-1 text-white"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-1 text-white" />

        <Row className="mt-4">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="border-end pe-3 mb-0">Privacy Policy</p>
            <p className="ps-3 mb-0">Terms of use</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <p className="mb-0">Copyright 2021 ChargebackZero</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
