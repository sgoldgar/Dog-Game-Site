import React, { Component } from 'react';
import './Home.css';
import Zilker from './img/Zilker.png'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [
        Zilker,
        'http://www.doodycalls.com/wp-content/uploads/2017/02/dogrunning.jpg',
        './img/image2.jpg'
      ],
      clickStage: 0
    }
  }
  render() {
    return (
      <section className="home">
        <div className="carouselbox">
            <i onClick={() => {this.setState({clickStage: (this.state.clickStage - 1)})}} id="arrow-left" className="fa fa-3x fa-arrow-left" aria-hidden="true"></i>
            <img className="carousel-image" src={this.state.carouselImages[this.state.clickStage]} alt="img"/>
            <i onClick={() => {this.setState({clickStage: (this.state.clickStage + 1)})}} id="arrow-right" className=" fa fa-3x fa-arrow-right" aria-hidden="true"></i>
        </div>
        <p className="tagline">Help the dogs get to their party on time!</p>
        <p>Each dog needs an item or two before they can go to the party. Find the items they need, store them in your backpack, bring them to the dogs and help them out!</p>
      </section>
    );
  }
}

export default Home;
