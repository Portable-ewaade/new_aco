import React from "react";
import TrackVisibility from "react-on-screen";
import styles from "@/styles/contact.module.css";

const Section1 = () => {
  return (
    <section className={` ${styles.contact_banner} mt-5 pt-5 pt-md-0`}>
      {/* <div>
       <img src="/assets/red-bg-img.png" alt="a & co"  style={{height:"0%"}}/>
       </div> */}

      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? " animate__animated animate__fadeIn " : ""
            }
          >
            <div className="bx-container text-center">
              <h2 className="fs-large fw-bold">Hello.</h2>
              <p className="fs-medium">We've been expecting you</p>
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default Section1;
