import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ContactUs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load HubSpot Form Script dynamically
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/242177532.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);






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

      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="d20c3852-1415-457b-aba9-10940bb2008f"
        data-portal-id="242177532"
      ></div>
      <Footer />
    </>
  );
};

export default ContactUs;
