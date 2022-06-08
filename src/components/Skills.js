import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 py-3">
            <h1>List 1</h1>
            <ul className="list-group">
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <h1>List 2</h1>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <h1>List 3</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
