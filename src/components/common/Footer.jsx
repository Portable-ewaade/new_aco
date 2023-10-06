import Link from "next/link";
import React,  { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the button
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="footer text-center py-5 " style={{ height: "11%" }}>
      <Row className="bx-container footer-container">
        <Col md={3} lg={4} className="my-2 ">
          <Link href="/">
            <img
              src="/assets/logo-whitee.png"
              alt="a & co"
              className="footer-logo"
              style={{ width: "14rem" }}
            />
          </Link>
          <br />
          <a
            href="mailto:info@theacconsulting.com"
            className="fs-xsmall ps-5 mt-0 pt-0 text-white"
          >
            info@theacconsulting.com
          </a>
        </Col>

        <Col md={6} lg={5} className="my-2 ">
          <div className="text-white nav-fs">
            <Row>
              <Col md={4} className="my-4 my-md-1">
                <Link href="/about" className="text-white mx-3">
                  About Us
                </Link>
              </Col>
              <Col md={4} className="my-4 my-md-1">
                <Link href="/services" className="text-white mx-3">
                  Services
                </Link>
              </Col>
              <Col md={4} className="my-4 my-md-1">
                <Link href="/contact" className="text-white mx-3">
                  Contact Us
                </Link>
              </Col>
            </Row>
          </div>
        </Col>

        <Col md={3} lg={3} className="my-2">
          <a href="/" className="mx-md-1 mx-3">
            <img
              src="/assets/facebook-icon.png"
              alt="a & co"
              style={{ width: "2.5rem" }}
            />
          </a>
          <a href="/" className="mx-md-1 mx-3">
            <img
              src="/assets/insta-icon.png"
              alt="a & co"
              style={{ width: "2.5rem" }}
            />
          </a>
          <a href="/" className="mx-md-1 mx-3">
            <img
              src="/assets/twitter-icon.png"
              alt="a & co"
              style={{ width: "2.5rem" }}
            />
          </a>
        </Col>
      </Row>
      <Link
        href="#"
        onClick={scrollToTop}
        className="position-absolute position-fixed bottom-0 end-0 top-25 mx-4 my-3 arrow-up"
      >
        <h1>< BsArrowUpCircle /></h1>
      </Link >
    </section>
  );
};

export default Footer;
