import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer-bg text-center  py-3 py-md-5" style={{ height: "9rem" }}>
      <Row className="bx-container ">
        <Col md={3} className="my-2 ">
          <Link href="/">
            <img
              src="/assets/logo-whitee.png"
              alt="a & co"
              style={{ width: "14rem"}}
            />
          </Link>
          <br />
          <a
            href="mailto:info@theacconsulting.com"
            className="text-color2 fs-xxsmall ps-5 mt-0 pt-0"
          >
            info@theacconsulting.com
          </a>
        </Col>

        <Col md={6} className="my-2 ">
          <div className="text-white nav-fs">
            <Link href="/about" className="text-white mx-3">
              About Us
            </Link>
            <Link href="/services" className="text-white mx-3">
              Services
            </Link>
            <Link href="/contact" className="text-white mx-3">
              Contact Us
            </Link>
          </div>
        </Col>

        <Col md={3} className="my-2">
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
