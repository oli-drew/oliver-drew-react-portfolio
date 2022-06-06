import React, { Component } from "react";
import "../styles/WorkCard.css";

class WorkCard extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={this.props.thumbnailImg}
          className="card-img-top"
          alt={this.props.description}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-around">
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
