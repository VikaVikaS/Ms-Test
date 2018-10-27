import React, { Component } from 'react';


class SharingData extends Component {
  render() {
    return (
        <div className="sharing-data">
            <div className="amount">{this.props.amount}</div>
            <div className="text">{this.props.text}</div>
        </div>
    );
  }
}

export default SharingData;
