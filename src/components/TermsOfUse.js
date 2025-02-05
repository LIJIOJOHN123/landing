import React, { useEffect } from "react";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import icon1 from "../assets/TermsOfUse/icon1.png";
import icon2 from "../assets/TermsOfUse/icon2.png";
import icon3 from "../assets/TermsOfUse/icon3.png";
import icon4 from "../assets/TermsOfUse/icon4.png";
import icon5 from "../assets/TermsOfUse/icon5.png";
import icon6 from "../assets/TermsOfUse/icon6.png";
import icon7 from "../assets/TermsOfUse/icon7.png";
import icon8 from "../assets/TermsOfUse/icon8.png";
import icon9 from "../assets/TermsOfUse/icon9.png";
import icon10 from "../assets/TermsOfUse/icon10.png";
import icon11 from "../assets/TermsOfUse/icon11.png";

import NavBar from "./NavBar";
const TermsOfUse = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      title: "ACCEPTANCE OF TERMS",
      img: icon1,
      des: "Thank you for your interest in ChargebackZero. (“ChargebackZero”, “us”, “our”, or “we”), and our website at www.ChargebackZero.com (the “Website”). Any reference to ChargebackZero shall be deemed to include its affiliates and subsidiaries, unless expressly noted otherwise. These Terms and Conditions (“T&Cs”) govern your use of www.ChargebackZero.com and any websites that link to these T&Cs. In these T&Cs, the word “Websites” refers to each of these websites and the services offered on those Websites. By visiting the Websites, you agree to these T&Cs and the ChargebackZero Privacy Policy – if you do not agree to these T&Cs, please do not visit the Websites. These T&Cs do not apply to any other products or services that ChargebackZero or its affiliates offer.",
    },
    {
      title: "PRIVACY AND PROTECTION OF PERSONAL INFORMATION",
      img: icon2,
      des: "For disclosures relating to the collection and use of your personal information on our Websites, please see the ChargebackZero Privacy Policy at https://ChargebackZero.com/privacy-policy/",
    },
    {
      title: "CONTENT POSTED ON THE WEBSITES",
      img: icon3,
      des: "All content, including marketing materials, help topics, white papers, datasheets, videos, and FAQs (collectively “Content”) that is made available as part of the Websites is the copyrighted work of ChargebackZero or its licensors. ChargebackZero reserves all other rights to the Content not expressly granted under these T&Cs. Content may not be removed, modified, distributed, reused, reposted or otherwise used except as provided herein. Further, ChargebackZero may have patents, patent applications, trademarks, copyrights, or other intellectual property rights covering subject matter in the Content. Unless expressly granted in writing, ChargebackZero does not provide any license to such patents, trademarks, copyrights, or other intellectual property in the Content. ChargebackZero does not claim ownership of any materials you provide to ChargebackZero (including feedback and suggestions) or post, upload, input, or submit to any Site (collectively “Submissions”). However, by posting, uploading, inputting, providing, or submitting your Submission, you are granting ChargebackZero and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses (including, without limitation, all ChargebackZero operations and services), including, without limitation, the license rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate, and reformat your Submission. Please note communications from you to ChargebackZero may be accessed by third parties without your knowledge or permission. As there is no expectation of confidentiality for your Submissions, you should not communicate to ChargebackZero any information you believe is sensitive or confidential in these settings.",
    },
    {
      title: "OWNERSHIP",
      img: icon4,
      des: "ChargebackZero retains all right, title, and interest in and to the Website and its Content, including all copyrights, patents, trade secrets, trademarks, and other intellectual property rights. ChargebackZero reserves all rights not expressly granted. These T&Cs do not grant or imply any rights to any ChargebackZero trademarks, trade names, or logos. Our trademarks may not be used in any advertising or publicity or otherwise without the prior express written permission of ChargebackZero.",
    },
    {
      title: "NO UNLAWFUL OR PROHIBITED USE",
      img: icon5,
      des: "You are strictly prohibited from using the Websites for any purpose that is considered unlawful or prohibited by these T&Cs. You are strictly prohibited from using the Websites in any manner that could damage, disable, overburden, or impair any Limeade server, or any networks connected to any ChargebackZero server, or that could interfere with any other party’s use and enjoyment of any Websites. You may not attempt to gain unauthorized access to any Website, other accounts, computer systems, or networks connected to any ChargebackZero server or to any ChargebackZero solutions or services through hacking, password mining, or any other means. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Websites.",
    },
    {
      title: "DISCLAIMERS",
      img: icon6,
      des: "Your use of the websites is at your sole risk. ChargebackZero makes no express or implied warranties, conditions or representations with respect to the site or its content, or any product or service available on or promoted through this site. The websites and all content is provided on an “as is,” “as available” basis, without representations or warranties of any kind. ChargebackZero and its affiliates disclaim all representations and warranties (1) of title, non-infringement, merchantability and fitness for a particular purpose; (2) relating to the security of these websites; (3) that the content of these websites is accurate, complete, or current; or (4) that these websites will operate securely or without interruption or error. Limitation of liability your use of the websites is at your own risk. ChargebackZero is not responsible for any errors or omissions in the content or for damages arising from the use or performance of the websites in no event will ChargebackZero be liable to anyone for any direct, indirect, punitive, special, exemplary, incidental, consequential, or other damages of any type or kind the aggregate liability of ChargebackZero arising under these t&cs will not exceed rs 1000",
    },
    {
      title: "THIRD-PARTY LINKS AND SERVICES",
      img: icon7,
      des: "The Website may provide information and content provided by third parties and links to third-party websites or resources. ChargebackZero is not responsible for such content or the availability of such external websites or resources, and does not control, endorse, or sponsor and are not responsible or liable for any claims related to such third-party links, content, website or resources. Your interactions with such third parties will be governed by the third parties’ own terms of service and privacy policies, and any other similar terms.",
    },
    {
      title: "WAIVER, SEVERABILITY AND ENTIRE AGREEMENT",
      img: icon8,
      des: "Our failure at any time to require performance of any provision of these T&Cs or to exercise any right provided for herein will not be deemed a waiver of such provision or such right. These T&Cs (together with the ChargebackZero Privacy Policy and any other legal documents, policies, terms, or agreements governing the Websites) comprise the entire agreement between you and ChargebackZero with regard to the Websites.",
    },
    {
      title: "MODIFICATION",
      img: icon9,
      des: "We reserve the right to update or modify the Websites or these T&Cs at any time without prior notice, and such changes will be effective immediately upon being posted on the relevant Website, except as set forth below. Your use of the Websites following any such change constitutes your agreement to be bound by the modified T&Cs.",
    },
    {
      title: "GOVERNING LAW",
      img: icon10,
      des: "This User Agreement shall be construed in accordance with the applicable laws of India. The Courts at New Delhi shall have exclusive jurisdiction in any proceedings arising out of this agreement. The arbitration shall be held in New Delhi.",
    },
    {
      title: "ACKNOWLEDGMENT",
      img: icon11,
      des: "BY ACCESSING THE SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS AND AGREE TO BE BOUND BY THEM.",
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
              Terms & Conditions
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
          <div className="mt-4">
            <h3>{item.title}</h3>
            <img src={item.img} alt="img" className="my-2" />
            <p style={{ marginBottom: "100px" }}>{item.des}</p>
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

export default TermsOfUse;
