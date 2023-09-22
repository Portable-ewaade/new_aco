import React from "react";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="position-relative banner-about-height" style={{ height: "63vh" }}>
      <div className="">
        <h1 className="fs-large lh-base fw-bold mb-3 mt-5 text-md-center">
          We build <br className="d-block d-md-none" /> bridges between <br className="d-none d-md-block" />
          companies and customers
        </h1>

        <div className="mt-4 text-center business">
          <Row className=" mt-4">
            <Col md={12}>
              <img
                src="/assets/business-img.png"
                alt="a & co"
                style={{ width: "428px", height: "303px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Banner;
