import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CookieConsent from "react-cookie-consent";

const CookieAccept = () => {
  return (
    <div className="cookies">
      <CookieConsent
        location="bottom"
        hideOnAccept
        visible="show"
        overlay
        cookieName="acoCookies"
        cookieValue= "This user accepted"
        containerClasses="cookies-container bounce-in p-md-3 "
        buttonClasses='cookies-btn2'
        buttonWrapperClasses='cookies-btn2-wrappper'
        expires={450}
      >
        <Row>
          <Col md={2}>
            <img
              src="/assets/cookies.png"
              alt="a & co"
              width="115px"
              height="115px"
              className="ms-"
            />
          </Col> 
          <Col md={8}>
            <h5 className="fw-semibold text-black">Cookie</h5>
            <p className="fs-normal text-black">
              We use cookies to ensure that we give you the best experience on
              our website. We also use cookies to ensure we show you advertising
              that is relevant to you. You can change your cookie settings at
              any time.
            </p>
          </Col>
          <Col md={2} style={{margin: 'auto'}} className="text-center text-md-blcok">
            <Link href="/contact" className="cookies-btn ">Privacy Policy</Link>
            
          </Col>
        </Row>
      </CookieConsent>
    </div>
  );
};
export default CookieAccept;
