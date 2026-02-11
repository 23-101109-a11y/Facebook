import React from 'react';
import Btn1 from './button';
import Btn2 from './button2';
import pfp4 from '../assets/pfp4.svg';
import './request.css';

const FollowRequest = () => {
    return ( 
        <>
        <div className="request">
            <div className="top-row">
                <div className="request-profile">
                    <img src={pfp4} alt="guy's pfp" />
                    <h6>Guy Hawkins</h6>
                </div>
                <h4>4H</h4>
            </div>
            <div className="bottom-row">
                <Btn1 />
                <Btn2 />
            </div>
        </div>
        </>
     );
}
 
export default FollowRequest;