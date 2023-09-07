import React from "react";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="position-relative">
      <div className="bx-section text-center">
        <h1 className="fw-bold mb-3 mt-5">
          We build bridges between <br />
          companies and customers
        </h1>

        <div className="mt-4">
          <Row className=" mt-4 project">
            <Col md={12}>
              <img
                src="/assets/business-img.png"
                alt="a & co"
                style={{ width: "20rem" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Banner;
