import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import icon1 from "../assets/Privacy/icon1.png";
import icon2 from "../assets/Privacy/icon2.png";
import icon3 from "../assets/Privacy/icon3.png";
import icon4 from "../assets/Privacy/icon4.png";
import icon5 from "../assets/Privacy/icon5.png";
import icon6 from "../assets/Privacy/icon6.png";
import icon7 from "../assets/Privacy/icon7.png";
import Footer from "./Footer";

import NavBar from "./NavBar";

const Privacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      img: icon1,
      des: `The terms “We” / “Us” / “Our” / “Company” individually and collectively refer to iPowerFi Technologies Pvt Ltd and the terms “You” / “Your” / “Yourself” refer to the users. This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000 and the rules made thereunder and the amended provisions about electronic documents/records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic, or digital signature. This Privacy Policy is a legally binding document between you Ipowerfi Technologies Private Limited(both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on the I accept tab or by use of the website or by other means) and will govern the relationship between you Ipowerfi Technologies Private Limited for your use of the website “ChargebackZero.com” (defined below). This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data or information) rules, 2011 under the Information Technology Act, 2000; which require publishing of the Privacy Policy for collection, use, storage, and transfer of sensitive personal data or information. Please read this Privacy Policy carefully by using the Website, you indicate that you understand, agree, and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website. By providing us your Information or by making use of the facilities provided by the Website, You hereby consent to the collection, storage, processing, and transfer of any or all of Your Personal Information and Non-Personal Information by us as specified under this Privacy Policy. You further agree that such collection, use, storage, and transfer of Your Information shall not cause any loss or wrongful gain to you or any other person.`,
    },
    {
      title: "USER INFORMATION",
      img: icon2,
      des: `To avail of certain services on our Websites, users are required to provide certain information for the registration process namely: – a) your name, b) email address, c) sex, d) age, e) PIN code, f) credit card or debit card details g) medical records and history, h) sexual orientation, i) biometric information, j) password, etc., and/or your occupation, interests, and the like. The Information as supplied by the users enables us to improve our sites and provide you with the most user-friendly experience. All required information is service-dependent and we may use the above-mentioned user information to, maintain, protect, and improve its services (including advertising services) and for developing new services Such information will not be considered sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005, or any other law for the time being in force.`,
    },
    {
      title: "COOKIES",
      img: icon3,
      des: `To improve the responsiveness of the sites for our users, we may use “cookies”, or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user’s interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalized Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their cookies to your browser (if you click on their ads), a process that we do not control. Our web servers automatically collect limited information about your computer’s connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data — such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site, and to let advertisers know the geographic locations from where our visitors come.`,
    },
    {
      title: "LINKS TO OTHER SITES",
      img: icon4,
      des: `Our policy discloses the privacy practices for our own website only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in any way for your use of such sites.`,
    },
    {
      title: "INFORMATION SHARING",
      img: icon5,
      des: `We share sensitive personal information with any third party without obtaining the prior consent of the user in the following limited circumstances:`,
      points: [
        `• When it is requested or required by law or by any court or governmental agency or authority to disclose, for verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offenses. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; and for complying with the applicable laws and regulations.`,
        `• We propose to share such information within its group companies and officers and employees of such group companies to process personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.`,
        `• Your data remains entirely within ChargebackZero’s secure systems and is never shared with any third-party tools or AI models.`,
        `• We solely collect data for analytics purposes, and it is always shared back with you in a secure format.`,
      ],
    },
    {
      title: "INFORMATION SECURITY",
      img: icon6,
      des: `We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. These include internal reviews of our data collection, storage, and processing practices, and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data. All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that the information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access. However, the internet is an ever-evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.`,
      highlits: [
        {
          SubTitle: "Cancellation and Refund",
          SubDes:
            "At ChargebackZero, we take pride in the quality and reliability of our products/services. As such, we strive to ensure that our customers are fully satisfied with their purchases. Due to the nature of our products/services, we do not offer cancellations or refunds.",
        },
        {
          SubTitle: "Exceptions",
          SubDes:
            "In rare cases where there may be extenuating circumstances or errors on our part, we will review each situation on a case-by-case basis and may consider offering alternatives or remedies as appropriate.",
        },
        {
          SubTitle: "Shipping and Delivery",
          SubDes:
            "Our products/services are digital/non-physical, so no shipping or delivery processes are involved. Upon completion of the purchase transaction, customers will receive access to the relevant digital content or services through the relevant proprietary platform or online dashboard.",
        },
        {
          SubTitle: "Exceptions",
          SubDes:
            "As no shipping or delivery is involved, exceptions related to shipping delays, lost packages, or damaged goods do not apply.",
        },
        {
          SubTitle: "Changes to this Privacy Policy",
          SubDes:
            "We reserve the right to update, modify, or amend this Privacy Policy at any time without prior notice. Any changes will be reflected on this page, and we encourage you to review this policy periodically for updates.",
        },
      ],
    },
    {
      title: "GRIEVANCE REDRESSAL",
      img: icon7,
      des: `Redressal Mechanism: Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to the designated Grievance Officer as mentioned below via in writing or through email signed with the electronic signature to Mr. Amit Relan (Grievance Officer) [ChargebackZero.com](https://ChargebackZero.com).`,
    },
  ];

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
          <div className="mt-2 rounded-3 text-center py-3  g-0">
            <h2
              className="position-relative d-inline-block "
              style={gradientTextStyle}
            >
            Privacy & Policy
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
      <Container className="text-center my-3">
        {data.map((item, i) => (
          <div className="mt-4" key={i}>
            {item.title && <h3>{item.title}</h3>}
            <img src={item.img} alt="icon" className="my-2" />
            <p>{item.des}</p>
            {item.points && (
              <ul className="list-unstyled">
                {item.points.map((point, index) => (
                  <li key={index} >{point}</li>
                ))}
              </ul>
            )}
            {item.highlits && (
              <div>
                {item.highlits.map((highlight, index) => (
                  <div key={index}>
                    <h5>{highlight.SubTitle}</h5>
                    <p>{highlight.SubDes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="mt-4">
          <h3> CONTACT</h3>

          <p className="m-0">
            If you have questions about our Websites or these T&Cs, please
            contact us at:
          </p>
          <p className="m-0">Company Name : iPowerFi Technologies Pvt Ltd</p>
          <p className="m-0">
            Address : 1503, Devika Tower 6, Nehru Place, New Delhi – 110019
          </p>
          <p className="m-0">Email: contact@ChargebackZero.com</p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Privacy;
