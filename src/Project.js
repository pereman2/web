import React, { Component } from 'react';
import './App.css';
class Projects extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * Props args
   * - name
   * - description
   * - link
   */

  render() {
    return (
          <a href={this.props.link} target="_blank">
            <div  className="project">
              <div className="project-desc">
                <div className="project-text">
                  <h2>{this.props.name}</h2>
                  <hr></hr>
                  <h3>{this.props.description}</h3>
                </div>
              </div>
              <div className="img-container">
                <img src={this.props.image} alt="" className="huffman-image" />
              </div>
            </div>
          </a>
    );
  }
}

export default Projects;