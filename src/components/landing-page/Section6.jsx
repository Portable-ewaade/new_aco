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
          height: "33rem",
          position: "relative",
        }}
        className="laptop-view"
      >
        <div className="position-absolute top-50 translate-middle person-c">
          <img
            src="/assets/person-c.png"
            alt="a & co"
            style={{
              width: "23rem",
              // marginRight: "13.4rem",
              marginBottom: "6.5rem",
            }}
          />
        </div>

        <div
          className="position-absolute top-50 translate-middle idea-text"
          // style={{ marginLeft: "35rem" }}
        >
          <h1 className=" text-color ">
            Don’t Let Your <br />
            Idea Stay A Dream.
          </h1>
          <button className="btnn fs-normal text-center mt-2">
            <a href="/contact" className="text-white ">Contact Us</a>
          </button>
        </div>
      </section>

      {/* mobile view */}
      <MobileForm />
    </>

  );
};

export default Section6;
