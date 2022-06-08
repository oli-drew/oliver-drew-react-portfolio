import React, { Component } from "react";
import Project from "./Project";
import workProjects from "./WorkProjects";

class Portfolio extends Component {
  static defaultProps = workProjects;
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-3">
            <Project
              title={this.props.work[0].title}
              description={this.props.work[0].description}
              gitURL={this.props.work[0].gitURL}
              depURL={this.props.work[0].depURL}
              img={this.props.work[0].img}
            />
          </div>
          {/* Skip first work project with slice  */}
          {this.props.work.slice(1).map((w, index) => (
            <div className="col-lg-4 col-md-6 py-3" key={index}>
              <Project
                title={w.title}
                description={w.description}
                gitURL={w.gitURL}
                depURL={w.depURL}
                img={w.img}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
