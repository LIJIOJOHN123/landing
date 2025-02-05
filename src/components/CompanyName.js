import React from 'react';
import axis from "../assets/CompanyName/axis.png";
import banknyou from "../assets/CompanyName/banknyou.png";
import fino from "../assets/CompanyName/fino.png";
import neu from "../assets/CompanyName/neu.png";
import pay from "../assets/CompanyName/pay.png";
import phonePe from "../assets/CompanyName/phonePe.png";
import signzy from "../assets/CompanyName/signzy.png";
import simpl from "../assets/CompanyName/simpl.png";
import wibmo from "../assets/CompanyName/wibmo.png";
import icici from "../assets/CompanyName/icici.png";
import nural from "../assets/CompanyName/nural.png";
import pineLabs from "../assets/CompanyName/pineLabs.png";
import { Container } from 'react-bootstrap';

const companyImages = [
  { src: axis, alt: 'Axis' },
  { src: banknyou, alt: 'Banknyou' },
  { src: fino, alt: 'Fino' },
  { src: neu, alt: 'Neu' },
  { src: pay, alt: 'Pay' },
  { src: phonePe, alt: 'PhonePe' },
  { src: signzy, alt: 'Signzy' },
  { src: simpl, alt: 'Simpl' },
  { src: wibmo, alt: 'Wibmo' },
  { src: pineLabs, alt: 'PineLabs' },
  { src: icici, alt: 'icic' },
  { src: nural, alt: 'nural' }
];

function CompanyName() {
  return (
    <Container className="my-5">
      <h4 className="text-center mb-4">You’re in good company</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {companyImages.map((item, i) => (
          <div key={i} className="d-flex align-items-center justify-content-center mx-2 mb-3">
            <img
              src={item.src}
              alt={item.alt}
              style={{ maxWidth: '180px', maxHeight: '110px', objectFit: 'contain' }}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CompanyName;
