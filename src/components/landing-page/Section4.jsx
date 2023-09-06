import React from "react";
import { Col, Row } from "react-bootstrap";

const Section4 = () => {
  return (
    <section className="background-bg section-4" style={{ height: "22rem" }}>
      <div className="bx-section4">
        <Row className="py-5 ">
          <Col  className="text-white mt-4">
            <div className="card p-4" >
              <h4 className="fw-bold text-color ">
                Don’t Let Your <br />
                Idea Stay A Dream.
              </h4>
              <button className="btn btnn1 fs-small text-center mt-2">
              Contact
            </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Section4;
