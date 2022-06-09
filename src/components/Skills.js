import React, { Component } from "react";
import "../styles/Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 py-3">
            <h4>Front End</h4>
            <ul className="list-group list-group-hover">
              <li className="list-group-item">HTML/CSS/JavaScript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Progressive Web Apps</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Bulma Framework</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <h4>Back End</h4>
            <ul className="list-group list-group-hover">
              <li className="list-group-item">Node</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">MySQL with Sequelize</li>
              <li className="list-group-item">MongoDB with Mongoose</li>
              <li className="list-group-item">GraphQL using Apollo server</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <h4>Soft Skills</h4>
            <ul className="list-group list-group-hover">
              <li className="list-group-item">Self Learning</li>
              <li className="list-group-item">Project Management</li>
              <li className="list-group-item">Communication</li>
              <li className="list-group-item">Problem-Solving</li>
              <li className="list-group-item">
                Time Management and Organization
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
