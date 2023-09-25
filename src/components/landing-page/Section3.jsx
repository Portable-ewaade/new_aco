import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Section3 = () => {
  return (
    <section className="position-relative our-project">
      <div className="bx-section text-center">
        <h1 className="fs-large fw-bold mb-3 mt-md-5 ">Our Projects</h1>
        <p className="fs-normal">
          A & co consulting is an innovation driven consultancy that harnesses
          the power of <br className="d-none d-md-none d-lg-block" /> technology
          to provide sustainable and profitable solutions to clients world wide
        </p>
        <div className="mt-4">
          <Link href="/" className="text-color project-link my-3">
            View all projects
          </Link>

          <Row>
            <Col sm={12} md={9} lg={8} className="p-0" style={{marginRight: "auto", marginLeft: "auto"}}>
              <Row className="project mt-3
              ">
                <Col
                  md={5}
                  className="mb-3 mb-md-0 py-md-3 py-2 px-3 px-md-0 me-md-5"
                >
                  <img
                    src="/assets/pathway-img.png"
                    alt="a & co"
                    className="ms-lg-5"
                    style={{ width: "20rem" }}
                  />
                </Col>

                <Col md={5} className="py-md-3 py-2 px-3 px-md-0 ms-md-5">
                  <img
                    src="/assets/ojanow-img.png"
                    alt="a & co"
                    className=" me-lg-5"
                    style={{ width: "20rem" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="position-absolute top-100 start-100 translate-middle c-img pt-5">
          <img
            src="/assets/blur-c.png"
            alt="a & co"
            style={{ width: "20rem", marginTop: "10rem", marginLeft: "-20rem" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
