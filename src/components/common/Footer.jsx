import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section className=" footer-bg" style={{ height: "9rem" }}>
      <Row className="bx-container pt-md-5 pt-4 ps-md-5 ps-4">
        <Col md={4} className="ps-5 mb-4 mb-md-0">
          <a href="/">
            <img
              src="/assets/logo-white.png"
              alt="a & co"
              style={{ width: "10rem" }}
            />
          </a>
          <br />
          <a
            href="mailto:info@theacconsulting.com"
            className="text-color2 fs-xxsmall ps-5 mt-0 pt-0"
          >
            info@theacconsulting.com
          </a>
        </Col>

        <Col md={4} className="d-flex linkss">
          <div className=" text-white fs-small">
            <Link href="/about" className="mx-3">
              About Us
            </Link>
            <Link href="/services" className="mx-3">
              Services
            </Link>
            <Link href="/contact" className="mx-3">
              Contact Us
            </Link>
          </div>
        </Col>

        <Col md={4} className="ps-md-5 ps-4 pt-4 pt-md-0">
          <a href="/" className="mx-md-1 mx-3">
            <img
              src="/assets/facebook-icon.png"
              alt="a & co"
              style={{ width: "2rem" }}
            />
          </a>
          <a href="/" className="mx-md-1 mx-3">
            <img
              src="/assets/insta-icon.png"
              alt="a & co"
              style={{ width: "2rem" }}
            />
          </a>
          <a href="/" className="mx-md-1 mx-3">
            <img
              src="/assets/twitter-icon.png"
              alt="a & co"
              style={{ width: "2rem" }}
            />
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
