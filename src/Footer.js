import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="copyright">	&copy; 2017</p>
        <div className="contact">
          <p>Question? Contact us at: <a href="mailto:ginjamgames@gmail.com?Subject=Pawstin%20Found" target="_top">ginjamgames@gmail.com</a></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
