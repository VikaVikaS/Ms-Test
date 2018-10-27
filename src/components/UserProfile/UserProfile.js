import React, { Component } from 'react';
import ProfileName from './ProfileName.js';
import ProfilePhoto from './ProfilePhoto.js';
import SharingData from './SharingData.js';
import UserPhoto from './../../images/photo.jpg';

class UserProfile extends Component {
  render() {
    return (
        <div className="user-profile">
            <div className="profile-main">
                <ProfileName name="UX Navy Profile"/>   
                <ProfilePhoto photo={UserPhoto}/>
            </div>
            <div className="profile-bottom">
                <SharingData amount="4 356" text="Followers" />
                <SharingData amount="532" text="Following" />
            </div>
        </div>
    );
  }
}

export default UserProfile;
