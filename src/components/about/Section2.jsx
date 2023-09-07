import React from "react";
import { Row, Col } from "react-bootstrap";

const Section2 = () => {
  return (
    <section className="bx-container pt-5">
      <div className="card border-0 rounded-5 color">

      <Row className="mt-3 ">

        <Col md={6}>

       
          <div>
            <img
              src="/assets/avatar-img.png"
              alt="a & co"
              style={{ height: "30rem", width: "35rem", padding: "2rem 3rem" }}
              className="banner-img"
            />
          </div>
        </Col>
        <Col md={6} className="mt-md-5 pt-md-5">
          <div className="mt-4">
            <h4 className="fw-bold lh-sm">
            We are <br />Consultants
            </h4>
            <p className="my-3 fs-small fw-bold w-75">
            We are tech enthusiasts, data geeks, process mavens, delivery strategists and industry experts focused on helping you grow and achieve your goals. We are curious, driven and love to tackle the big challenges that make a difference. We go over and beyond for our clients and teammates.
            </p>
            <p className="my-3 fs-small w-75">
            A & co consulting is an innovation driven consultancy that harnesses the power of technology to provide sustainable and profitable solutions to clients world wide across various industries. We help organizations strategize, design, develop, implement and manage technological systems that drive revenue increase and growth to achieve goals.If you are ready to innovate and revolutionize your business, A & Co can help envision, execute and elevate you to the next level using the latest technologies. We recognize that impact is not created alone and together we can make history.
            </p>
        
          </div>
        </Col>
      </Row>
      </div>
      <div className="position-absolute top-50 end-50 translate-middle blur-c">
        <img
          src="/assets/Ellipse3.png"
          alt="a & co"
          style={{ width: "30rem", marginTop: "20rem" }}
        />
      </div>
    </section>
  );
};

export default Section2;
