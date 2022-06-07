import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    const isEmail = this.props.isEmail;
    return (
      <div className="card mb-3 border-0 text-center">
        <a href={this.props.linkURL} target="_blank" rel="noreferrer">
          <img
            style={{ width: 120 }}
            src={this.props.icon}
            className="card-img-top mx-auto"
            alt={`${this.props.title} icon`}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.subtitle}
          </h6>
          <div>
            {isEmail ? (
              <a href={`mailto: ${this.props.email}`} className="card-link">
                {this.props.email}
              </a>
            ) : (
              <a
                href={this.props.linkURL}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                {this.props.title}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
