import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "../contact/Message";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";

export const MobileForm = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [formError, setFormError] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading to true just before sending the email
    setLoading(true);

    // Check if any required fields are empty
    const requiredFields = [
      "user_name",
      "selectedOptions",
      "user_email",
      "phone_number",
      "company_name",
    ];

    const isFormValid = requiredFields.every((field) => {
      if (field === "selectedOptions") {
        return selectedOptions.length > 0;
      }

      const fieldValue = form.current[field].value.trim();
      return fieldValue !== "";
    });

    if (!isFormValid) {
      setFormError("Please fill in all required fields.");
      setLoading(false); // Reset loading state
      return;
    }

    const formElement = form.current;

    emailjs
      .sendForm(
        "service_nz3wuzn",
        "template_lsy4g5t",
        formElement, // Pass the form element here
        "q5csQGKeI6w3R0Til"
      )
      .then(
        (result) => {
          setStep(1);

          // Reset the error message and loading state
          setFormError("");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);

          // Reset the loading state
          setLoading(false);
        }
      );
  };

  const options = [
    { value: "Software Development", label: "Software Development" },
    { value: "Branding", label: "Branding" },
    { value: "Product Design", label: "Product Design" },
    { value: "Data Analytics", label: "Data Analytics" },
    { value: "Strategy", label: "Strategy" },
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <>
      <section
        className="background-bg px-3 mt-5 pt-5 position-relative mobile-view"
        style={{ height: "48rem" }}
      >
        <div className="card px-5 pb-4 rounded-4 ">
          <form className="mt-5" onSubmit={handleSubmit} ref={form} id="myForm">
            {step === 0 && (
              <>
                <div className="mb-4">
                  <h2 className="fw-bold text-color mt-4">
                    Don’t Let Your <br />
                    Idea Stay A Dream.
                  </h2>
                </div>

                <label htmlFor="inputFullName">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  name="user_name"
                  placeholder="Full Name"
                />

                <label htmlFor="multiSelect">
                  What would you like us to craft for you? (Choose one or more)
                </label>
                <Select
                  id="multiSelect"
                  options={options}
                  isMulti
                  name="selectedOptions"
                  value={selectedOptions}
                  onChange={handleMultiSelectChange}
                  className="mb-3"
                />

                <div className="form-group fs-11 grey font-weight-medium">
                  <Row>
                    <Col md={6}>
                      <label htmlFor="inputEmailAddress">Email</label>
                      <input
                        type="email"
                        className="form-control p-2 mb-3"
                        name="user_email"
                        placeholder="Email Address"
                      />
                    </Col>
                    <Col md={6}>
                      <label htmlFor="inputEmailAddress">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control p-2 mb-3"
                        name="phone_number"
                        placeholder="Phone number"
                      />
                    </Col>
                  </Row>
                  <label htmlFor="inputFullName">Company Name</label>
                  <input
                    type="text"
                    className="form-control p-2 mb-3"
                    name="company_name"
                    placeholder="Company Name"
                  />
                  <p className="fs-small">
                    By clicking on the button below, you accept our
                    <a href="/" className="text-color fw-bold">
                      privacy policy
                    </a>
                  </p>
                </div>

                <Row>
                  <Col md={12}>
                    <button
                      className="text-center form-btn"
                      value="Send"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={loading} // Disable the button while loading
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </>
            )}
          </form>
          {formError && <div className="text-danger">{formError}</div>}
          {step === 1 && (
            <>
              <Message
                title={`Thanks for contacting us`}
                status="success"
                buttonText="Go to Homepage >"
              />
            </>
          )}
        </div>
        <div className="position-absolute top-0 start-50 translate-middle">
          <img
            src="/assets/colored-circle2.png"
            alt="a & co"
            style={{ marginTop: "4.5rem" }}
          />
        </div>
      </section>
    </>
  );
};

export default MobileForm;
