import React, { Component } from 'react';
import './App.css';
import {get_projects, get_image} from './database'
import Project from './Project'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
    this.projects = React.createRef();
  }
  componentDidMount = () => {
    this.initialize_projects();
  }

  /**
   * TODO: use images from firebase
   */
  initialize_projects = async () => {
    let projects;
    await get_projects().then((response) => {
      projects = response;
    })
    let project_components = projects.map((project) => 
      <Project 
        key={project["name"]} 
        name={project["name"]} 
        description={project["description"]} 
        link={project["link"]} 
        image="" 
      />
    )
    this.setState({
      projects: project_components,
    });
  }

  render() {
    return (
      <div ref={this.projects} className="projects">
        <h1>PROJECTS</h1>
        <div className="projects-container">
          {this.state.projects}
        </div>
      </div>
    );
  }
}

export default Projects;