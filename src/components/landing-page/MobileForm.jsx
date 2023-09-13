import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "../contact/Message";
import { Col, Row } from "react-bootstrap";

export const MobileForm = () => {
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

      <section className="background-bg px-3 mt-5 pt-5 position-relative mobile-view" style={{height: "45rem"}}>
       
        <div className="card px-5 py-5 rounded-4 ">
          <form className="" onSubmit={handleSubmit} ref={form}>
            {step === 0 && (
              <>
                <div className="mb-4 mt-5">
                  <h2 className="fw-bold text-color">
                    Don’t Let Your <br />
                    Idea Stay A Dream.
                  </h2>
                </div>
                <label htmlFor="inputFullName">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  name="user_name"
                  placeholder="Name"
                />

                <div className="form-group font-weight-medium">
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
                      <label htmlFor="inputPhoneNumber">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control p-2 mb-3 "
                        name="phone_number"
                        placeholder="Phone Number"
                      />
                    </Col>
                  </Row>
                  <label htmlFor="inputCompanyName">Company Name</label>
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
                    className="text-center btn btnn2"
                  >
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
          {/* <div className="position-absolute top-0 start-100 translate-middle blur-c ">
            <img
              src="/assets/Ellipse4.png"
              alt="a & co"
              style={{ width: "30rem", marginLeft: "8rem", marginTop: "50rem" }}
            />
          </div> */}
        </div>
        {/* <div className="position-absolute top-0 end-50 translate-middle blur-c">
          <img
            src="/assets/Ellipse3.png"
            alt="a & co"
            style={{ width: "30rem", marginTop: "35rem" }}
          />
        </div> */}
         <div className="position-absolute top-0 start-50 translate-middle">
          <img src="/assets/colored-circle2.png" alt="a & co" 
          style={{ marginTop: "4.5rem" }}/>
        </div>
      </section>
    </>
  );
};

export default MobileForm;
