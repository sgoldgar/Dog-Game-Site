import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import MiniGame from './MiniGame.js';
import About from './About.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <Home/>
          <MiniGame/>
          <About/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
