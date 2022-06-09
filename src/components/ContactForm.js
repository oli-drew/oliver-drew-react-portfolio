import React, { Component } from "react";
import validator from "validator";

const resetValidation = (e) => {
  e.target.classList.remove("is-invalid");
  e.target.classList.remove("is-valid");
};

const validation = (e) => {
  if (e.target.type === "email") {
    if (validator.isEmail(e.target.value)) {
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.add("is-invalid");
    }
  } else if (e.target.value === "") {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.add("is-valid");
  }
};
class ContactForm extends Component {
  render() {
    return (
      <form className="contactForm">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onMouseLeave={validation}
            onMouseEnter={resetValidation}
            onFocus={resetValidation}
            onBlur={validation}
          />
          <div className="valid-feedback">Nice name!</div>
          <div className="invalid-feedback">
            Hey! Get back here.. This field is required.
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onMouseLeave={validation}
            onMouseEnter={resetValidation}
            onFocus={resetValidation}
            onBlur={validation}
          />
          <div className="valid-feedback">Awesome email address!</div>
          <div className="invalid-feedback">Please enter a valid email</div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            onMouseLeave={validation}
            onMouseEnter={resetValidation}
            onFocus={resetValidation}
            onBlur={validation}
          ></textarea>
          <div className="valid-feedback">You've entered a message</div>
          <div className="invalid-feedback">Please enter a message</div>
        </div>
        <button
          type="submit"
          className="btn btn-outline-secondary mt-2"
          disabled
        >
          Submit
        </button>
      </form>
    );
  }
}

export default ContactForm;
