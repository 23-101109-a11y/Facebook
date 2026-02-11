import React from 'react';
import './profile.css';
import profilepic from '../assets/profile-pic.jpg';
import pfp from '../assets/pfp.jpg';

const Profile = () => {
    return ( 
        <>
        <div className="profile-card">
            <img src={profilepic} alt="profile pic" />
            <div className="profile-name">
                <img src={pfp} alt="islam's pfp" />
                <h4>Islam Ali</h4>
            </div>
        </div>
        </>
     );
}
 
export default Profile;