import React from "react";
import { Col, Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <section className="bx-container pt-5">
      <Row>
        <Col md={4}>
          <div className="card card-bg p-4">
            <h6>Software Development</h6>
            <p className="fs-small">
              Take your business to the next level with reliable, scalable and
              unique software solutions built with the latest tools and
              technologies.
            </p>

            <div className="mt-5">
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
        <Col md={4}>
          <div className="card card-bg p-4">
            <h6>Product Design
and Branding</h6>
            <p className="fs-small">
            Take your business to the next level with reliable, scalable and unique software solutions built with the latest tools and technologies.
            </p>

            <div className="mt-5">
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
        <Col md={4}>
          <div className="card card-bg p-4">
            <h6>Dedicated Team
Building</h6>
            <p className="fs-small">
            Take your business to the next level with reliable, scalable and unique software solutions built with the latest tools and technologies.
            </p>

            <div className="mt-4">
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
        
      </Row>
    </section>
  );
};

export default Section2;
