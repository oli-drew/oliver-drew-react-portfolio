import React, { Component } from "react";

class WorkCard extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={this.props.img}
          className="card-img-top"
          alt={`Screenshot of the ${this.props.title} project`}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <a
            href={this.props.depURL}
            className="btn btn-outline-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href={this.props.gitURL}
            className="btn btn-outline-dark"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
}

export default WorkCard;
