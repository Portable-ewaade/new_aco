import React from "react";
import MobileForm from "./MobileForm";
import styles from "@/styles/home.module.css";

const Section6 = () => {
  return (
    <>
      {/* laptop view */}
      <section className={`${styles.home_dream} laptop-view`}>
        <main className="grid-container">
          <div
            className={`position-absolute top-50 start-50 translate-middle ${styles.idea_text}`}
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
          <div className={`position-absolute top-50 start-50 translate-middle ${styles.person_c}`}>
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
        </main>
      </section>

      {/* mobile view */}
      <MobileForm />
    </>
  );
};

export default Section6;
