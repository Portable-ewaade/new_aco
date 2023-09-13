import React from "react";
import MobileForm from "./MobileForm";

const Section6 = () => {
  return (
    <>
    {/* laptop view */}
      <section
        style={{
          backgroundImage: "url('/assets/card-img.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "26rem",
          position: "relative",
        }}
        className="laptop-view"
      >
        <div className="position-absolute top-50 translate-middle blur-c person-c">
          <img
            src="/assets/person-c.png"
            alt="a & co"
            style={{
              width: "18rem",
              // marginRight: "13.4rem",
              marginBottom: "2rem",
            }}
          />
        </div>

        <div
          className="position-absolute top-50 translate-middle idea-text"
          // style={{ marginLeft: "35rem" }}
        >
          <h3 className="fw-bold text-color ">
            Don’t Let Your <br />
            Idea Stay A Dream.
          </h3>
          <button className="btn btnn1 fs-small text-center mt-2">
            <a href="/contact">Contact</a>
          </button>
        </div>
      </section>

      {/* mobile view */}
      <MobileForm />
    </>

  );
};

export default Section6;
