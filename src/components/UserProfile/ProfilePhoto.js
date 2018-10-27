import React, { Component } from 'react';


class ProfilePhoto extends Component {
  render() {
    return (
        <div className="profile-photo">
            <img src={this.props.photo} alt="user-pic" />
        </div>
    );
  }
}

export default ProfilePhoto;
