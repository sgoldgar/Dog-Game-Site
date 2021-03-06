import React, { Component } from 'react';
import './MiniGame.css';
import Ginny from './img/Ginny.png';
import Ranger from './img/Ranger.png';
import Bone from './img/Bone.png';
import PartyFwee from './img/Party Fwee.png';
import Present from './img/Present.png';
import PartyHat from './img/Partyhat.png';


class MiniGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogs : {
        ranger: {
          name : 'ranger',
          picture: Ranger,
          className: "Ranger dogpic"
        },
        ginny: {
          name: 'ginny',
          picture: Ginny,
          className: "Ginny dogpic"
        }
      },
      accessories: {
        bone:{
          picture: Bone,
          className: "bone accessorypic"
        },
        present:{
          picture: Present,
          className: "present accessorypic"
        },
        partyfwee:{
          picture: PartyFwee,
          className: "party-fwee accessorypic"
        },
        partyhat:{
          picture: PartyHat,
          className: "party-hat accessorypic"
        }
      },
      dogSelected:{
          name: 'ginny',
          picture: Ginny,
          className: "Ginny dogpic"
      },
      accessorySelected:{
          picture: Bone,
          className: "bone accessorypic"
      }
    }
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(){
  }

  render() {
    return (
      <section id="minigame" className="mini-game">
        <h2 className="section-title">MINI-GAME</h2>
        <p>Click on a dog and add some accessories to help them get ready for the party!</p>
        <div className="sidebar">
          <img src={Ginny} alt="ginnydog" onClick={() => {this.setState({dogSelected: this.state.dogs.ginny})}}/>
          <img src={Ranger} alt="rangerdog" onClick={() => {this.setState({dogSelected: this.state.dogs.ranger})}}/>
        </div>
        <div className="main">
          <figure>
            <img className={this.state.dogSelected.className} src={this.state.dogSelected.picture} alt="dogpic"/>
            <img className={this.state.accessorySelected.className} src={this.state.accessorySelected.picture} alt="accessorypic"/>
            <figcaption>{this.state.dogSelected.name}</figcaption>
          </figure>
        </div>
        <div className="accessories">
          <img src={Bone} alt="bone" onClick={() => {this.setState({accessorySelected: this.state.accessories.bone})}}/>
          <img src={Present} alt="present" onClick={() => {this.setState({accessorySelected: this.state.accessories.present}); this.toggleClass()}}/>
          <img src={PartyFwee} alt="party" onClick={() => {this.setState({accessorySelected: this.state.accessories.partyfwee}); this.toggleClass()}}/>
          <img src={PartyHat} alt="partyhat" onClick={() => {this.setState({accessorySelected: this.state.accessories.partyhat}); this.toggleClass()}}/>
        </div>
      </section>
    );
  }
}

export default MiniGame;
