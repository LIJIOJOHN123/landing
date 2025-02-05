import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Websites/img1.png";
import img2 from "../assets/Websites/img2.png";
import img3 from "../assets/Websites/img3.png";

function Websites() {
  const navigate = useNavigate();

  const data = [
    {
      img: img1,
      link: "solution/validX",
      backgroundColor: "#fefbf2",
      Name: "ValidX",
      Title: "ValidX – Underwriting & Onboarding",

      Description:
        "Automate Your Onboarding, Eliminate Risk, Stay Compliant and Secure. Revenue Soar: Make the onboarding process for your merchants quick and easy with our solutions, similar to the Stripe experience.",
      Features: [
        "Take underwriting time from days to minutes",
        "See a 60% reduction in merchant abandonment",
        "Process 70% more applications per underwriter",
        "Make an informed decision on every application with actionable insights for your underwriters",
      ],
      Buttons: {
        BookADemo: "BOOK A DEMO",
        LearnMore: "LEARN MORE",
      },
    },
    {
      img: img2,
      link: "solution/monitorX",
      backgroundColor: "#efeaff",
      Name: "MonitorX",
      Title: "MonitorX – Ongoing Monitoring",
      Description:
        "Stay apprised of what is going on with the merchants in your portfolio, especially when it comes to sudden or unexpected content violations. Keep a close eye on unusual merchant behavior for both low- and high-risk categories. Make sure your portfolio meets all applicable terms of service as well as contractual agreements by monitoring its own unique business.",
      Features: [
        "All of your merchant information in one easy-to-use dashboard",
        "Avoid governmental and regulatory fines",
        "Minimize chargebacks, customer disputes",
        "Avoid account compliance violations",
        "Detailed reporting for you and your merchants",
      ],
      Buttons: {
        BookADemo: "BOOK A DEMO",
        LearnMore: "LEARN MORE",
      },
    },
    {
      img: img3,
      link: "solution/disputeX",
      Name: "DisputeX",
      backgroundColor: "#ffeefe",
      Title: "DisputeX – Chargeback Management",
      Description:
        "Quickly and painlessly manage and track chargebacks online through the platform. Give merchants an easy online portal to provide appropriate documentation, prevent & resolve chargebacks.",
      Features: [
        "Prevent chargebacks and protect merchant accounts in real-time",
        "Automatically suggest dispute resolution strategies to reduce operating costs",
        "Intelligently fight and recover chargebacks",
        "Understand root cause of chargebacks",
      ],
      Buttons: {
        BookADemo: "BOOK A DEMO",
        LearnMore: "LEARN MORE",
      },
    },
  ];

  return (
    <div className="container mt-5">
      <h4 className="text-center">
        Our Integrated Fraud Risk Management Solution
      </h4>
      <div className="row">
        {data.map((item, index) => (
          <div
            className="mt-3 "
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div
              className={`d-sm-flex  d-block  justify-content-between  container mb-4 ${
                index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
              }`}
              key={index}
            >
              <div className="d-sm-flex  d-none  w-sm-50 mt-0">
                <img
                  src={item.img}
                  className="img-fluid  object-fit-contain"
                  alt={item.Name}
                />
              </div>
              <div className=" w-100 w-sm-50 p-3">
                <h5 className="card-title mb-2">{item.Title}</h5>
                {item.Subtitle && (
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.Subtitle}
                  </h6>
                )}
                <p className="card-text">{item.Description}</p>
                <div>
                  {item.Features && (
                    <ul className=" ">
                      {item.Features.map((feature, featureIndex) => (
                        <li className="list-group-item" key={featureIndex}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.Buttons && (
                    <div className="mt-3 d-flex justify-content-center">
                      <button
                        onClick={() => {
                          navigate("/book-a-demo");
                        }}
                        style={{
                          marginRight: "20px",
                          background:
                            "linear-gradient(90deg, #8A2BE2, purple, gold)",
                          color: "white",
                          transition:
                            "background-color 0.3s ease-in-out, transform 0.2s ease",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                          width: "200px",
                          maxHeight: "70px",
                        }}
                        className="border-white btn btn-dark btn-lg rounded mb-3 mb-sm-0"
                      >
                        {item.Buttons.BookADemo}
                      </button>
                      <button
                        onClick={() => navigate(item.link)}
                        style={{
                          width: "200px",
                          backgroundColor: "#5c3792",
                          maxHeight: "70px",
                        }}
                        className="btn text-white"
                      >
                        {item.Buttons.LearnMore}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Websites;
