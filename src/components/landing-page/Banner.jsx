import { Row, Col } from "react-bootstrap";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import React from "react";
import Link from "next/link";


const banner = () => {
  return (
    <section className="bx-container p-md-0">
      <Row className="mt-3">
        <Col md={6} className="mt-md-5 pt-md-5 px-4">
          <div className="mt-4">
            <h1 className="fw-bold lh-sm">
              Think, Transform and Build 
              <span className="text-color"> Innovate </span> and
              <span className="text-color"> Grow</span>
            </h1>
            <p className="my-3">
              Unlock your full potential with our innovative solutions. 
              <br className="d-none d-md-block" /> Think big, transform your business, and build a brighter future.
            </p>
            <Link href="/contact" className="btn btnn1 fs-small text-center">
              Let's Talk
              <IoChatboxEllipsesOutline className="fs-6 mx-1" />
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img
              src="/assets/banner-right-img.png"
              alt="a & co"
              style={{ height: "30rem", width: "35rem", padding: "2rem 3rem" }}
              className="banner-img"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default banner;
