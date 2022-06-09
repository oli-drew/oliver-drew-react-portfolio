import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <form className="contactForm">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          {/* <input type="text" className="form-control" name="message" /> */}
          <textarea class="form-control" name="message"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-secondary mt-2">
          Submit
        </button>
      </form>
    );
  }
}

export default ContactForm;
