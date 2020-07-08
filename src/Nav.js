import React, { Component } from 'react';
import './App.css';
import logo from './logowhite.png';
import hamb from './hamb.svg';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    
  }

  openHambMenu = () => {
    if(this.state.open) {
      document.querySelector('.hamb-menu').classList.remove('hamb-menu-open');
      this.setState({ open: false });
    } else {
      document.querySelector('.hamb-menu').classList.add('hamb-menu-open');
      this.setState({ open: true });
    }
  }
  
  hideMenu = () => {
    if(this.state.open) {
      document.querySelector('.hamb-menu').classList.remove('hamb-menu-open');
      this.setState({ open: false });

    }
  }
  render() {
    return (
      <div className="nav">
        <li onClick={this.props.onScrollProjects}>Projects</li>
        <li onClick={this.props.onScrollAbout}>About</li>
        <img onClick={() => { this.props.onScrollTop(); this.hideMenu(); }} src={logo} alt="logo" className="logo"/>
        <li onClick={this.props.onScrollExperience}>Experience</li>
        <li onClick={this.props.onScrollContact}>Contact</li>
        <img onClick={this.openHambMenu} src={hamb} alt="hamb" className="hamb"/>
        <div className='hamb-menu'>
          <li onClick={() => {this.props.onScrollProjects(); this.hideMenu()}}>Projects</li>
          <li onClick={() => {this.props.onScrollContact(); this.hideMenu()}}>Contact</li>
          <li onClick={() => {this.props.onScrollExperience(); this.hideMenu()}}>Experience</li>
          <li onClick={() => {this.props.onScrollAbout(); this.hideMenu()}}>About</li>
        </div>
    </div>
    );
  }
}

export default Nav;