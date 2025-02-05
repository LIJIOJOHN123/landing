import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import logo from "../assets/Navbar/logo.png";

function NavBar() {
  const navigate = useNavigate();

  const link = [
    { text: "SOLUTION", link: "/" },

    // { text: "WHY US", link: "/why-us" },

    { text: "ABOUT US", link: "/about-us" },

    { text: "Blog", link: "/blog" },
  ];

  const UseCases = [
    {
      title: "ValidX - Merchant Underwriting",

      href: "/solution/validX",
    },

    {
      title: "MonitorX - Ongoing Monitoring",

      href: "/solution/monitorX",
    },

    {
      title: "DisputeX - Chargeback Management",

      href: "/solution/disputeX",
    },
    {
      title: "Case Management",

      href: "/solution/case-management",
    },

    {
      title: "Industry Classifier",

      href: "/solution/industryclassifier",
    },
  ];

  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div>
      <Navbar
        className="rounded"
        style={{ color: "white", zIndex: 10 }}
        bg="dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand className="text-white" as={Link} to="/">
            <img
              src={logo}
              alt="logo"
              style={{ objectFit: "cover", height: "40px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            className="bg-white"
          />

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav
              className="ml-auto w-100 d-flex justify-content-end align-items-center"
              style={{ gap: "20px" }}
            >
              {link.map((item, index) =>
                index === 0 ? (
                  <NavDropdown
                    key={index}
                    title={<span style={{ color: "white" }}>{item.text}</span>}
                    id="navbarDropdown"
                    className="custom-dropdown"
                  >
                    {UseCases.map((useCase) =>
                      useCase.title === "Industry Classifier" ? (
                        <NavDropdown.Item
                          key={useCase.title}
                          as="a"
                          href="https://www.validx.chargebackzero.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {useCase.title}
                        </NavDropdown.Item>
                      ) : (
                        <NavDropdown.Item
                          key={useCase.href}
                          onClick={() => handleNavigation(useCase.href)}
                        >
                          {useCase.title}
                        </NavDropdown.Item>
                      )
                    )}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    className="text-white"
                    key={index}
                    as={Link}
                    to={item.link}
                  >
                    {item.text}
                  </Nav.Link>
                )
              )}
              <Link to="/auth/login">
                <Button className="bg-transparent border-white">
                  SIGN IN
                </Button>
              </Link>
              <Link to={"/report"}>

                <Button
                  style={{ backgroundColor: "#F0E68C" }}
                  className="text-black  border-0 "
                >
                  GET STARTED
                </Button>
              </Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
