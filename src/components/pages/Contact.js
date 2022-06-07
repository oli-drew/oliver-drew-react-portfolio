import React from "react";
import ContactCard from "../ContactCard";
import ghIcon from "../../img/GitHub-Icon.png";
import emailIcon from "../../img/email-icon.png";
import linkedInIcon from "../../img/linkedin-icon.png";
import stackoverflowIcon from "../../img/stackoverflow-icon.png";

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <ContactCard
              icon={ghIcon}
              title="GitHub"
              subtitle="Follow me on GitHub"
              linkURL="https://github.com/oli-drew"
            />
          </div>
          <div className="col-md-3">
            <ContactCard
              icon={emailIcon}
              title="Email"
              subtitle="Send me an email"
              email="oli_webdev@protonmail.com"
              isEmail={true}
            />
          </div>
          <div className="col-md-3">
            <ContactCard
              icon={linkedInIcon}
              title="LinkedIn"
              subtitle="Connect with me on LinkedIn"
              linkURL="https://uk.linkedin.com/in/oliver-drew"
            />
          </div>
          <div className="col-md-3">
            <ContactCard
              icon={stackoverflowIcon}
              title="Stack Overflow"
              subtitle="Follow me on Stack Overflow"
              linkURL="https://stackoverflow.com/users/16805384/oli-drew"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
