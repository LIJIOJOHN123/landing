import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo1 from "../assets/IntegrationMadeEasy/Dedicated customer_support for smooth_integration_.png";
import logo2 from "../assets/IntegrationMadeEasy/Integrate in record time.png";
import logo3 from "../assets/IntegrationMadeEasy/Wide range of APIs across region.png";

function IntegrationMadeEasy() {
  const data1 = [logo1, logo2, logo3];

  return (
    <div style={{ backgroundColor: "#f2f7ff" }} className="d-none d-sm-block">
      <Container>
        <h4 className="text-center py-3">Integration Made Easy</h4>
        <Row className="g-4 pb-2">
          {data1.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
              <img src={item} alt={`logo ${index + 1}`} className="img-fluid "  />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default IntegrationMadeEasy;
