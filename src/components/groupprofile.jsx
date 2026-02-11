import React from 'react';
import './textstyles.css';
import grouppfp from '../assets/groupprofile.png';
import './groupprofile.css';

const GroupProfile = () => {
    return ( 
        <>
        <div className="group-profile">
            <img className='pfp' src={grouppfp} alt="group pfp" />
            <h3>UI / UX Designers & Developers</h3>
        </div>
        </>
     );
}
 
export default GroupProfile;