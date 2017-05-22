import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className="about">
        <h2 className="section-title">ABOUT</h2>
        <p>This game is made by Sarah Goldgar. She is a front-end web developer and pixel art enthusiast. Having a lot of dog friends and one time, a dog birthday party, she got the idea for a game based in her hometown to teach younger children about problem solving and iconic locations in Austin. All art is made by her in Photoshop and the game is coded in Unity using Javascript. This site was made using ReactJS.</p>
        <p>You can follow game updates <span><a href="https://ginjamgames.tumblr.com/" target="_blank">here</a></span>.</p>
    </section>
    );
  }
}

export default About;
