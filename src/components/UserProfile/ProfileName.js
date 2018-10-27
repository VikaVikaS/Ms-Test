import React, { Component } from 'react';


class ProfileName extends Component {
  render() {
    return (
        <div className="profile-name">
            {this.props.name}
        </div>
    );
  }
}

export default ProfileName;
