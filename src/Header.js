import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">PAW-STIN FOUND</h1>
        <nav>
          <ul>
            <li><a href='#'>home</a></li>
            <li><a href='#'>mini-game</a></li>
            <li><a href='#'>about</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
