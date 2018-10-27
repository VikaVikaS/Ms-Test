import React, { Component } from 'react';
import logo from './../../images/footer-logo.svg';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <address className="address">
                365 Freebies. 007/365
            </address>
            <img src={logo} alt="logo" className="logo" />
            <div className="nickname">@anakarenart</div>
        </footer>
    );
  }
}

export default Footer;
