import React, { Component } from 'react';
import './App.css';
import './Projects.js'
import Nav from './Nav.js';
import About from './About.js'
import Projects from './Projects';
import laptop from './laptop.png';
import Experience from './Experience';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0
    }
    this.about = React.createRef();
    this.projects = React.createRef();
    this.experience = React.createRef();
    this.contact = React.createRef();
    this.scrollTop()
  }
  componentDidMount() {
    let nav = document.querySelector('.nav');
    nav.style.opacity = 0;
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.c = 0;
    var title = document.querySelector('.home-text');
    var strTitle = title.textContent;
    title.innerHTML = '';

    var spans = strTitle.split('');
    for(let i = 0; i < strTitle.length; i++) {
      title.innerHTML += '<span>' + spans[i] + '</span>';
    }
    this.setState({chars: title.childNodes});
    const appearDesc = () => {
      var desc = document.querySelector('.home-desc');
      desc.style.opacity = 1;
    }
    const moveUpwards = () => {
      var chars = this.state.chars;
      chars.forEach(element => {
        element.classList.add('move-up'); 
      });
      
      setTimeout(appearDesc, 1000);
    }
    
    const removeLetters = () => {
      var chars = this.state.chars;
      var char = chars[this.state.c];
      if(['I','A','O', 'U','Z'].indexOf(char.textContent) >= 0) { 
        char.classList.add('remove'); 
      }
      this.setState({c: (this.state.c + 1)});
      if(this.state.c == chars.length) {
        this.setState({c: 0});

        this.moveTimer = setTimeout(moveUpwards, 100);
        clearInterval(this.removeTimer);
      }
    }
    const onTick = () =>{
      var chars = this.state.chars;
      var char = chars[this.state.c];
      if(char.textContent != ' ') { char.classList.add('fade'); }
      
      this.setState({c: (this.state.c + 1)});
      if(this.state.c == chars.length) {
        this.setState({c: 0});
        this.removeTimer = setInterval(removeLetters, 100);
        
        clearInterval(this.timer);
      }
    }
    this.timer = setInterval(onTick, 100);
    
  }
  
  handleScroll (event) {
    let nav = document.querySelector('.nav');
    
    let y = window.pageYOffset;
    if(y > 200) {
      nav.style.opacity = 1;
    } else {
      nav.style.opacity = 0;
    }
  }

  scrollToProjects = () => {
    window.scrollTo({
      "behavior": "smooth",
      "left": 0,
      "top": this.projects.current.projects.current.offsetTop - 150
    });
  }

  scrollToAbout = () => {
    window.scrollTo({
      "behavior": "smooth",
      "left": 0,
      "top": this.about.current.about.current.offsetTop - 150
    });
  }

  scrollToExperience = () => {
    window.scrollTo({
      "behavior": "smooth",
      "left": 0,
      "top": this.experience.current.experience.current.offsetTop - 150
    });
  }

  scrollToContact = () => {
    window.scrollTo({
      "behavior": "smooth",
      "left": 0,
      "top": this.contact.current.contact.current.offsetTop 
    });
  }

  scrollTop = () => {
    window.scrollTo({
      "behavior": "smooth",
      "left": 0,
      "top": 0
    });
  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
        <Nav
          onScrollAbout={this.scrollToAbout}
          onScrollProjects={this.scrollToProjects}
          onScrollTop={this.scrollTop}
          onScrollExperience={this.scrollToExperience}
          onScrollContact={this.scrollToContact}
        />
        <div className="home" >
          <img src={laptop}></img>
          <h1 className="home-text">PEREDB</h1>
          <h2 className="home-desc">Software development</h2>
          <div className="arrow" onClick={this.scrollToProjects}></div>
        </div>
        <Projects ref={this.projects}/>
        <About ref={this.about}/>
        <Experience ref={this.experience} />
        <Contact ref={this.contact}/>
      </div>
      
    );
  }
}

export default App;
