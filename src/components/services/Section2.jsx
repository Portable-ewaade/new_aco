import React from "react";
import { Col, Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <section className="bx-service pt-5">
      <Row className="py-2 position-relative">
        <Col md={4}>
          <div className="card card-bg p-4 mt-md-5 service-card">
            <h6>Software Development</h6>
            <p className="fs-small">
              Take your business to the next level with reliable, scalable and
              unique software solutions built with the latest tools and
              technologies.
            </p>

            <div className="mt-4 fs-small fw-medium">
              <p>Custom Development Services</p>
              <hr />
              <p>Application Redesign and Modernization</p>
              <hr />
              <p>Web and Application Integration Services</p>
              <hr />
              <p>Technology Consultation</p>
              <hr />
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3 mt-md-0">
          <div className="card card-bg p-4 service-card">
            <h6>Product Design and Branding</h6>
            <p className="fs-small">
              Take your business to the next level with reliable, scalable and
              unique software solutions built with the latest tools and
              technologies.
            </p>

            <div className="mt-5 fs-small fw-medium">
              <p>Web and Mobile App Design</p>
              <hr />
              <p>Custom Digital Product Design</p>
              <hr />
              <p>Redesign and Modernization Services</p>
              <hr />
              <p>Corporate Branding and Logo Design</p>
              <hr />
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3 mt-md-0">
          <div className="card card-bg p-4 mt-md-5 service-card">
            <h6>Dedicated Team Building</h6>
            <p className="fs-small">
              Take your business to the next level with reliable, scalable and
              unique software solutions built with the latest tools and
              technologies.
            </p>

            <div className="mt-5 fs-small fw-medium">
              <p>Full Stack Developers</p>
              <hr />
              <p>Dev Ops and Infrastructure Engineers</p>
              <hr />
              <p>IT Support Engineers</p>
              <hr />
              <p>Data Engineers & Cybersecurity Specialists</p>
              <hr />
            </div>
          </div>
        </Col>
        <div className="position-absolute top-100 start-100 translate-middle blur-c pt-5">
          <img
            src="/assets/Ellipse4.png"
            alt="a & co"
            style={{ width: "35rem", marginLeft: "10rem", marginTop: "60rem" }}
          />
        </div>
      </Row>
      <div className="position-absolute top-100 end-50 translate-middle blur-c">
        <img
          src="/assets/Ellipse3.png"
          alt="a & co"
          style={{ width: "30rem", marginTop: "35rem" }}
        />
      </div>
      
    </section>
  );
};

export default Section2;
