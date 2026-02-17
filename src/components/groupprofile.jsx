import React from 'react';
import './textstyles.css';
import './groupprofile.css';

const GroupProfile = (props) => {
    return ( 
        <>
        <div className="group-profile">
            <img className='pfp' src={props.grouppfp} alt="group pfp" />
            <h3>
                {props.groupname}
                </h3>
        </div>
        </>
     );
}
 
export default GroupProfile;