import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="header">
            <div className="header-name">{this.props.name}</div>
        </header>
    );
  }
}

export default Header;
