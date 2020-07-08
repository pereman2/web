import React, { Component } from 'react';
import './App.css';
import huffman from './huffman1.png'
import board from './board.png'
class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = React.createRef();

  }

  render() {
    return (
      <div ref={this.projects} className="projects">
        <h1>PROJECTS</h1>
        <div className="projects-container">
          <a className="project" href="https://github.com/pereman2/Huffman" target="_blank">
            <div  className="project">
              <div className="project-desc">
                <div className="project-text">
                  <h2>HUFFMAN CODING (C++)</h2>
                  <hr></hr>
                  <h3>ASCII text compressor ussing huffman coding</h3>
                </div>
              </div>
              <div className="img-container">
                <img src={huffman} alt="huff" className="huffman-image" />
              </div>
            </div>
          </a>
          <a className="project" href="https://board-4bec9.firebaseapp.com/" target="_blank">
            <div className="project">
              <div className="project-desc">
                <div className="project-text">
                  <h2>WHITE BOARD</h2>
                  <hr></hr>
                  <h3>Basic white board</h3>
                </div>
              </div>
              <div className="img-container">
                <img src={board} alt="huff" className="huffman-image" />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;