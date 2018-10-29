import React, { Component } from 'react';


class ProfilePhoto extends Component {
  render() {
    return (
        <div className="profile-photo">
            <div className="photo-wrap"><img src={this.props.photo} alt="user-pic" /> </div>
        </div>
    );
  }
}

export default ProfilePhoto;
