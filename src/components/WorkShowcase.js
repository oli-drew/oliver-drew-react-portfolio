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
          <div className="col-md-12 py-3">
            <WorkCard
              title={this.props.work[0].title}
              description={this.props.work[0].description}
              gitURL={this.props.work[0].gitURL}
              depURL={this.props.work[0].depURL}
              thumbnailImg={this.props.work[0].thumbnailImg}
              mainImg={this.props.work[0].mainImg}
            />
          </div>
          {/* Skip first work project with slice  */}
          {this.props.work.slice(1).map((w) => (
            <div className="col-md-4 py-3">
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
