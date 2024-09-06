import React from "react";
import logo1 from "../assets/Business/logo1.png";
import logo2 from "../assets/Business/logo2.png";
import logo3 from "../assets/Business/logo3.png";
import logo4 from "../assets/Business/logo4.png";
import { Container, Row, Col } from "react-bootstrap";

const data1 = [logo1, logo2, logo3, logo4];

function Business() {
  return (
    <Container className="my-4">
      <h4 className="text-center mb-4">
        Empowering Business Worldwide to Streamline Their Payment Solution
      </h4>

      <Row>
        {data1.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="d-flex justify-content-center">
            <img src={item} alt={`logo ${index + 1}`} className="img-fluid mb-3 " />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Business;
