import React, { useState } from "react";
import img1 from "../assets/FeatureList/img1.png";
import img2 from "../assets/FeatureList/img2.png";
import img3 from "../assets/FeatureList/img3.png";

// Sample data array based on the image content
const data = [
  {
    img: img1,
    category: "Merchant underwriting",
    powered_by: "ValidX",
    features: [
      "KYB/Entity Verification",
      "MCC Detection",
      "Liveness & Video Verification",
      "ID Checks & Data Extraction",
      "Bank Account Verification",
      "Geotagging",
      "VPN & IP Spoofing Checks",
      "AML",
      "Website Presence Review",
      "Financial Data & BG Validations",
      "Online Reputation Checks & More",
    ],
  },
  {
    img: img2,
    category: "Merchant monitoring",
    powered_by: "MonitorX",
    features: [
      "Changing Content and Website Information",
      "MCC Change Detection",
      "Transaction Laundering Detection",
      "Social Media Monitoring",
      "Fully Flexible Configuration",
    ],
  },
  {
    img: img3,
    category: "Chargeback prevention",
    powered_by: "DisputeX",
    features: [
      "Chargeback Prevention Alerts",
      "Rapid Dispute Resolution",
      "Chargeback Representation",
      "Chargeback Analytics",
    ],
  },
];

// React component to render the content
const FeatureList = () => {
  // State to manage the visibility of each feature list
  const [visible, setVisible] = useState(null);

  // Toggle function to show/hide the feature list
  const toggleVisibility = (index) => {
    setVisible((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-body-tertiary">
      <div className="container pt-4 ">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card "
                style={{ cursor: "pointer" }}
                onClick={() => toggleVisibility(index)}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      src={item.img}
                      className="img-fluid"
                      style={{ width: "30px", objectFit: "contain" }}
                      alt="icon"
                    />
                    <div>
                      <h5 className="card-title">{item.category}</h5>
                      <p className="mb-2 text-muted">
                        Powered by {item.powered_by}
                      </p>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`flexSwitchCheck${index}`}
                        checked={visible === index}
                      />
                    </div>
                  </div>
                  {visible === index && (
                    <ul className="list-group list-group-flush mt-3">
                      {item.features.map((feature, idx) => (
                        <li className="list-group-item" key={idx}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
