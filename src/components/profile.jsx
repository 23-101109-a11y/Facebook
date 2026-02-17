import React from 'react';
import './profile.css';
import profilepic from '../assets/profile-pic.jpg';

const Profile = (props) => {
    return ( 
        <>
        <div className="profile-card">
            <img src={profilepic} alt="profile pic" />
            <div className="profile-name">
                <img src={props.pfp} />
                <h4>
                    {props.name}
                </h4>
            </div>
        </div>
        </>
     );
}
 
export default Profile;