import React from "react";
import { Col, Row } from "react-bootstrap";
// import TrackVisibility from "react-on-screen";

const Section4 = () => {
  return (
    <div className="bx-section text-center mt-5 pt-md-5 pt-2">
      <h1 className="fs-large fw-bold mb-3 mt-4">
        Let's kick off your <br />
        project in 4 easy steps
      </h1>
      <p className="my-5">
        A & co consulting is an innovation driven consultancy that harnesses the
        power of technology to provide <br className="d-none d-md-block" />
        sustainable and profitable solutions to clients world wide across
        various industries.
      </p>

      <div className="mt-4">
        <Row className=" mt-5">
          <Col md={3} className="my-4 my-md-0">
            <img
              src="/assets/icon-3.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <img
              src="/assets/icon-2.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <img
              src="/assets/icon-1.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <img
              src="/assets/icon-3.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md={3}>
            <h6 className="mt-4">Step 1</h6>
            <p className="fs-small px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="mt-4">Step 2</h6>
            <p className="fs-small px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="mt-4">Step 3</h6>
            <p className="fs-small px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="mt-4">Step 4</h6>
            <p className="fs-small px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section4;
