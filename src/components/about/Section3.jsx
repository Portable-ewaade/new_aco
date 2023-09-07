import React from "react";
import { Col, Row } from "react-bootstrap";

const Section3 = () => {
  return (
    <section className="bx-section mt-5 pt-3 position-relative">
      <Row>
        <Col md={6}>
          <div>
            <h6 className="fw-bold ">Our Mission</h6>
            <p className="fs-small">
              Our mission is to create value by leveraging cutting-edge
              technology solutions to help our clients achieve their business
              goals and stay ahead in a constantly evolving digital landscape.
            </p>
          </div>
        </Col>
        <Col md={6} className="vision">
          <div>
            <h6 className="fw-bold ">Our Vision </h6>
            <p className="fs-small">
              At A & co consulting, our goal is to be the leading consulting
              firm, renowned for our innovative and forward-thinking approach to
              solving complex business challenges and driving growth.
            </p>
          </div>
        </Col>
      </Row>
      <div className="position-absolute top-0 translate-middle blur-c pt-5">
        <img
          src="/assets/blur-a.png"
          alt="a & co"
          style={{ width: "20rem", marginTop: "7rem", marginLeft: "-20rem" }}
        />
      </div>

      <Row className="mt-4 position-relative">
        <Col md={6}>
          <div>
            <h6 className="fw-bold ">Our Values </h6>
            <p className="fs-small">
              Our values are the driving force of each decision we make and the
              backbone of our culture.
            </p>
          </div>
          <Row>
            <Col md={6}>
              <h6 className="text-color fs-small">Innovation</h6>
              <p className="fs-xsmall">
                We embrace new ideas, emerging technologies, and creative
                solutions to drive growth and stay ahead of the curve.
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-color fs-small">Integrity</h6>
              <p className="fs-xsmall">
                We operate with the highest standards of honesty, transparency,
                and ethical behavior, and always act in the best interests of
                our clients.
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-color fs-small">Inclusion</h6>
              <p className="fs-xsmall">
                We value diversity and believe that a variety of perspectives,
                backgrounds, and experiences are essential to driving innovation
                and delivering exceptional results.
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-color fs-small">Fun</h6>
              <p className="fs-xsmall">
                Emphasize a positive and enjoyable work environment, recognizing
                the value of humor and levity in fostering creativity and
                community.
              </p>
            </Col>
          </Row>
        </Col>
        <div className="position-absolute top-100 start-100 translate-middle blur-c pt-5">
        <img
          src="/assets/Ellipse4.png"
          alt="a & co"
          style={{ width: "35rem", marginLeft: "10rem" }}
        />
      </div>
      </Row>
    </section>
  );
};

export default Section3;
