import React, { Component } from "react";
import WorkCard from "./WorkCard";
import workProjects from "./WorkProjects";
import "../styles/WorkShowcase.css";

class WorkShowcase extends Component {
  static defaultProps = workProjects;
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Work</h1>
          {this.props.work.map((w) => (
            <div className="col-md-4">
              <WorkCard
                title={w.title}
                description={w.description}
                gitURL={w.gitURL}
                depURL={w.depURL}
                thumbnailImg={w.thumbnailImg}
                mainImg={w.mainImg}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WorkShowcase;
