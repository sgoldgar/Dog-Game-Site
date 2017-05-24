import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <header>
        <h1 className="logo">PAW-STIN FOUND</h1>
        <nav>
          <ul>
            <li><a href='#home'>home</a></li>
            <li><a href='#minigame'>mini-game</a></li>
            <li><a href='#about'>about</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}



export default Header;
