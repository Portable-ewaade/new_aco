import { Row, Col } from "react-bootstrap";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import React from "react";
import Link from "next/link";

const banner = () => {
  return (
   
    <section className="bx-container pt-4 pb-5 mt-5 mt-md-0 home-banner-height">
      <Row className="mt-3">
        <Col md={6} className="mt-md-5 pt-lg-5 ms- ms-md-0">
          <div className="mt-5 mt-md-4 pt-4 pt-md-0">
            <h1 className="fw-bold lh-sm fs-large">
              Think, <br className="d-block d-md-none" /> Transform <br /> and
              Build <br />
              <span className="text-color"> Innovate </span> and
              <span className="text-color"> Grow</span>
            </h1>
            <p className="my-3 fs-normal fw-medium">
              Unlock your full potential with our innovative solutions.
              <br className="d-none d-md-block" /> Think big, transform your
              business, and build a brighter future.
            </p>
            <div className="btnn">
              <Link
                href="/contact"
                className="fs-normal fw-medium text-white text-center"
              >
                Let's Talk
                <IoChatboxEllipsesOutline
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    marginLeft: "0.4rem",
                  }}
                />
              </Link>
            </div>
          </div>
        </Col>
        <Col md={6} className="p-0">
          <div>
            <img
              src="/assets/banner-img2.png"
              alt="a & co"
              className="home-banner-img pe-md-5 pe-lg-0 " 
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default banner;
