import React, { useEffect } from "react";
import Link from "next/link";

const Message = ({
  title,
  buttonText,
}) => {
  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff" ? "#fff" : "",
          padding: "1.5rem 2.5rem" ? "1.5rem 2.5rem" : "",
          borderRadius: "1.5rem" ? "1.5rem" : "",
        }}
        className="card p-5"
      >
        <div className="mrgt2 text-center">
          <img src="/assets/send-img.png" alt="a & co" style={{width: "16rem"}} />
        </div>

        <div className=" text-center">
          <h5 className="fw-bold">{title}</h5>
          <p className=" fs-xsmall">
          Our team of experts will  get in <br /> touch with you in no time.
          </p>

          <Link
            href="/"
            className="text-color"
          >
            {buttonText ? buttonText : "Home"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Message;
