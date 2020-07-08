import React, { Component } from 'react';
import './App.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
  }
    
  render() {
    return (
      <div ref={this.about} className="about">
        <h1>ABOUT</h1>
        <h2>Pere Díaz Bou</h2>
        <hr></hr>
        <p>Altea, Spain</p>
        <p>Polythecnic University of Valencia</p>
        <p style={{textAlign: 'left'}}>I'm currently studying third year of Computer Science degree(especialization Software Engieneering).
        </p>
        <p style={{textAlign: 'left'}}>
          On my free time I'm always working on personal projects or learning about Cybersecurity.
          I read lots of books from science related, personal growth and fiction. I'm passionate about tech in general
          since my first thought. 
        </p>
      </div>
    );
  }
}

export default About;
