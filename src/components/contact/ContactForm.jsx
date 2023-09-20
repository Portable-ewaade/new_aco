import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "./Message";
import { Col, Row } from "react-bootstrap";
import { Section1 } from ".";
import Select from "react-select"; // Import the react-select library

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [formError, setFormError] = useState(""); // State for form error message
  const [selectedOptions, setSelectedOptions] = useState([]); // State for selected options in the multi-select dropdown

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const requiredFields = ["user_name", "user_email", "phone_number", "Company_name"];
    const isFormValid = requiredFields.every((field) => form.current[field].value.trim() !== "");

    if (!isFormValid) {
      setFormError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    // Extract the selected values from the multi-select dropdown
    const selectedValues = selectedOptions.map((option) => option.value);

    // Create a data object that includes the selected values
    const data = {
      ...form.current,
      selectedOptions: selectedValues.join(", "), // Convert the array to a comma-separated string
    };

  // Assuming your form has an ID attribute (e.g., "myForm")
const formElement = document.getElementById("myForm");

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
      console.log(result.text);

      // Reset the error message
      setFormError("");
    },
    (error) => {
      console.log(error.text);
    }
  );

  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <>
      {/* start a conversation */}
      {step === 0 ? <Section1 /> : ""}

      <section className="bx-contact" style={{ height: "75vh" }}>
        <div className="card px-5 border-0">
          <form className="mt-5 aco-weare" onSubmit={handleSubmit} ref={form} id="myForm">
            {step === 0 && (
              <>
                <div className="mb-4">
                  <h4 className="fw-bold">Send Us A Message </h4>
                </div>

                <label htmlFor="inputFullName">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  name="user_name"
                  placeholder="Full Name"
                />

                {/* Add the multi-select dropdown */}
                <label htmlFor="multiSelect" >Select Options</label>
                <Select
                  id="multiSelect"
                  options={options}
                  isMulti
                  value={selectedOptions}
                  onChange={handleMultiSelectChange}
                  className="mb-3"
                />
                {/* ... Other form inputs ... */}
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
                    name="Company_name"
                    placeholder="Company Name"
                  />
                  <p className="fs-small">
                    By clicking on the button below, you accept our
                    <a href="/" className="text-color fw-bold">
                      {" "}
                      privacy policy
                    </a>
                  </p>
                </div>

                {loading && (
                  <button
                    value="Send"
                    type="submit"
                    className="text-center btnn2"
                  >
                    Sending...
                  </button>
                )}
                {!loading && (
                  <Row>
                    <Col md={12}>
                      <button
                        className="text-center btnn2"
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
          {/* <div
            className="position-absolute top-0 start-100 translate-middle blur-c"
            style={{ height: "" }}
          >
            <img
              src="/assets/Ellipse4.png"
              alt="a & co"
              style={{ marginRight: "8rem", marginTop: "24rem" }}
            />
          </div> */}
        {/* <div
          className="position-absolute top-0 end-50 translate-middle blur-c"
          style={{ height: "10rem" }}
        >
          <img
            src="/assets/Ellipse3.png"
            alt="a & co"
            style={{
              marginRight: "0rem",
              marginTop: "-60rem",
              height: "10rem",
              width: "30rem",
            }}
          />
        </div> */}
      </section>
    </>
  );
};

export default ContactUs;
