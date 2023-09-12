import React from "react";
import { Col, Row } from "react-bootstrap";

const Section3 = () => {
  return (
    <section className="bx-section mt-5 pt-md-3 pt-5 position-relative ">
      <Row className="about1 mt-5 mt-md-0 pt-5 pt-md-0">
        <Col md={6} className="my-3">
          <div className="d-flex">
            <img src="/assets/target-icon.png" alt="a & co" className="icons"/>
            <h6 className="fw-bold">Our Mission</h6>
          </div>
            <p className="fs-small ps-5">
              Our mission is to create value by leveraging cutting-edge
              technology solutions to help our clients achieve their business
              goals and stay ahead in a constantly evolving digital landscape.
            </p>
        </Col>
        <Col md={6} className="vision my-2">
          <div className="d-flex">
            <img src="/assets/eye-icon.png" alt="a & co" className="icons"/>
            <h6 className="fw-bold ">Our Vision </h6>
          </div>
            <p className="fs-small ps-5">
              At A & co consulting, our goal is to be the leading consulting
              firm, renowned for our innovative and forward-thinking approach to
              solving complex business challenges and driving growth.
            </p>
        </Col>
      </Row>
      <div className="position-absolute top-0 translate-middle blur-c pt-5">
        <img
          src="/assets/blur-a.png"
          alt="a & co"
          style={{ width: "20rem", marginTop: "7rem", marginLeft: "-20rem" }}
        />
      </div>

      <Row className="mt-4 position-relative about2">
        <Col md={6} >
          <div className="mb-2 d-flex">
            <img src="/assets/diamond-icon.png" alt="a & co" className="icons"/>
            <h6 className="fw-bold ">Our Values </h6>
          </div>
            <p className="fs-small ps-5">
              Our values are the driving force of each decision we make and the
              backbone of our culture.
            </p>
          <Row className="about3 ps-5">
            <Col md={6}>
              <h6 className="text-color fs-small">Innovation</h6>
              <p className="fs-xxsmall">
                We embrace new ideas, emerging technologies, and creative
                solutions to drive growth and stay ahead of the curve.
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-color fs-small">Integrity</h6>
              <p className="fs-xxsmall">
                We operate with the highest standards of honesty, transparency,
                and ethical behavior, and always act in the best interests of
                our clients.
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-color fs-small">Inclusion</h6>
              <p className="fs-xxsmall">
                We value diversity and believe that a variety of perspectives,
                backgrounds, and experiences are essential to driving innovation
                and delivering exceptional results.
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-color fs-small">Fun</h6>
              <p className="fs-xxsmall">
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
