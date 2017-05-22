import React, { Component } from 'react';
import './MiniGame.css';
import Ginny from './img/Ginny.png';
import Ranger from './img/Ranger.png';

class MiniGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogs : {
        ranger: {
          name : 'ranger',
          picture: Ranger
        },
        ginny: {
          name: 'ginny',
          picture: Ginny
        }
      },
      accessories: null,
      dogSelected:{
        ginny: {
          name: 'ginny',
          picture: Ginny
        }
      }
    }
  }

  componentDidMount(props){
    this.setState({dogSelected:this.state.dogs.ginny})
  }
  render() {
    return (
      <section className="mini-game">
        <h2 className="section-title">MINI-GAME</h2>
        <p>Click on a dog and add some accessories to help them get ready for the dog party!</p>
        <div className="sidebar">
          <img src={Ginny} alt="ginnydog" onClick={() => {this.setState({dogSelected: this.state.dogs.ginny})}}/>
          <img src={Ranger} alt="rangerdog" onClick={() => {this.setState({dogSelected: this.state.dogs.ranger})}}/>
        </div>
        <div className="main">
          <figure>
            <img src={this.state.dogSelected.picture} alt="dogpic"/>
            <figcaption>{this.state.dogSelected.name}</figcaption>
          </figure>
        </div>
      </section>
    );
  }
}

export default MiniGame;
