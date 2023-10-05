import React from "react";
import MobileForm from "./MobileForm";

const Section6 = () => {
  return (
    <>
      {/* laptop view */}
      <section className=" home-dream laptop-view"
        style={{
          backgroundImage: "url('/assets/card-img.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "33rem",
          position: "relative",
        }}
        
      >
        <div
          className="position-absolute top-50 start-50 translate-middle idea-text"
          style={{ marginLeft: "-8rem" }}
        >
          <h1
            className="text-color"
            style={{ fontSize: "2.3rem", fontWeight: "600" }}
          >
            Don’t Let Your <br />
            Idea Stay A Dream.
          </h1>
          <button className="btnn fs-normal text-center mt-2">
            <a href="/contact" className="text-white ">
              Contact Us
            </a>
          </button>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle person-c">
          <img
            src="/assets/person-c.png"
            alt="a & co"
            style={{
              width: "23rem",
              marginLeft: "30rem",
              marginBottom: "6.5rem",
            }}
          />
        </div>
      </section>

      {/* mobile view */}
      <MobileForm />
    </>
  );
};

export default Section6;
