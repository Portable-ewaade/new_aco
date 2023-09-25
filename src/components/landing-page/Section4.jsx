import React from "react";
import { Col, Row } from "react-bootstrap";

const Section4 = () => {
  return (
    <div className="bx-section text-center mt-5 pt-md-5 pt-2 steps">
      <h1 className="fs-large fw-bold mb-3 mt-4 px-2">
        Let's kick off your <br className="d-none d-md-block"/>
        project in 4 easy steps
      </h1>
      <p className="my-5">
        A & co consulting is an innovation driven consultancy that harnesses the
        power of technology to provide <br className="d-none d-md-none d-lg-block" />
        sustainable and profitable solutions to clients world wide across
        various industries.
      </p>

      <div className="mt-4">
        <Row className=" mt-5">
          <Col md={3} className="">
            <img
              src="/assets/shake-icon.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
             <h6 className="mt-4">Step 1</h6>
            <p className="fs-small px-4 px-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <img
              src="/assets/cup-icon.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
             <h6 className="mt-4">Step 2</h6>
            <p className="fs-small px-4 px-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <img
              src="/assets/write-icon.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
             <h6 className="mt-4">Step 3</h6>
            <p className="fs-small px-4 px-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <img
              src="/assets/shake-icon.png"
              alt="a & co"
              style={{
                width: "3.5rem",
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
              }}
            />
             <h6 className="mt-4">Step 4</h6>
            <p className="fs-small px-4 px-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ligula et nisl hendrerit sodales ut et dui.
            </p>
          </Col>
        </Row>
      </div>

      <div>
      </div>
    </div>
  );
};

export default Section4;
