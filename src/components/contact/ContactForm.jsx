import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "./Message";
import { Col, Row } from "react-bootstrap";
import { Section1 } from ".";

export const ContactUs = () => {
  // init("user_xxxxxxxxxxxxxxxxxxx");
  const [loading, setLoading] = useState();
  const [step, setStep] = useState(0);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_nz3wuzn",
        "template_lsy4g5t",
        form.current,
        "q5csQGKeI6w3R0Til"
      )
      .then(
        (result) => {
          setStep(1);
          // alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* start a conversation */}
      {step === 0 ? <Section1 /> : ""}

      <section className="bx-contact" style={{ height: "75vh" }}>
        <div className="card px-5 border-0">
          <form className="mt-5 aco-weare" onSubmit={handleSubmit} ref={form}>
            {step === 0 && (
              <>
                <div className="mb-4">
                  <h5 className="fw-bold">Send Us A Message </h5>
                </div>
                <label htmlFor="inputFullName">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  name="user_name"
                  placeholder="Name"
                />

                <div className="form-group fs-11 grey font-weight-medium">
                  <Row>
                    <Col md={6}>
                      <label htmlFor="inputEmailAddress"> Email</label>
                      <input
                        type="email"
                        className="form-control p-2 mb-3 "
                        name="user_email"
                        placeholder="Email"
                      />
                    </Col>
                    <Col md={6}>
                      <label htmlFor="inputEmailAddress">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control p-2 mb-3 "
                        name="phone_number"
                        placeholder="Phone number"
                      />
                    </Col>
                  </Row>
                  <label htmlFor="inputFullName">Company Name</label>
                  <input
                    type="text"
                    className="form-control p-2 mb-3"
                    name="Company_name"
                    placeholder="Company Name"
                  />
                  <p className="fs-small">
                    By clicking on the button below, you accept our 
                    <span className="text-color fw-bold"> privacy policy</span>
                  </p>
                </div>

                {loading && (
                  <button
                    value="Send"
                    type="submit"
                    className="text-center btn btnn2">
                    Sending...
                  </button>
                )}
                {!loading && (
                  <Row>
                    <Col md={12}>
                      <button
                        className="text-center btn btnn2"
                        value="Send"
                        type="submit"
                      >
                        Send
                      </button>
                    </Col>
                  </Row>
                )}
              </>
            )}

          </form>
            {step === 1 && (
              <>
                <Message
                title={`Thanks for contacting us`}
                  status="success"
                  buttonText="Go to Homepage >"
                />
              </>
            )}
          <div className="position-absolute top-0 start-100 translate-middle blur-c ">
            <img
              src="/assets/Ellipse4.png"
              alt="a & co"
              style={{ width: "30rem", marginLeft: "8rem", marginTop: "50rem" }}
            />
          </div>
        </div>
        <div className="position-absolute top-0 end-50 translate-middle blur-c">
          <img
            src="/assets/Ellipse3.png"
            alt="a & co"
            style={{ width: "30rem", marginTop: "35rem" }}
          />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
