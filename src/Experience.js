
import React, { Component } from 'react';
import './App.css';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.experience = React.createRef();
  }
    
  render() {
    return (
      <div ref={this.experience} className="experience">
        <h1>EXPERIENCE</h1>
        <p>MOLO URBAN MOBILITY</p>
        <h2>SOFTWARE ENGINEER INTERN</h2>
        <hr></hr>
        <p>5 months</p>
        <p style={{textAlign: 'left', marginLeft: '20px'}}>I developed scripts using both javascript and python to automate the creation of
            statistics of tons of data in a distributed way, maintained MySQL databases, elasticsearch, kibana and heat maps... 
        </p>
      </div>
    );
  }
}

export default Experience;