import React from 'react';
import Btn1 from './button';
import './request.css';

const FollowRequest = (props) => {
    return ( 
        <>
        <div className="request">
            <div className="top-row">
                <div className="request-profile">
                    <img src= {props.pfp} alt='pfp' />
                    <h6>
                        {props.name}
                    </h6>
                </div>
                <h4>4H</h4>
            </div>
            <div className="bottom-row">
                <Btn1 title="Confirm" styling="btn1" />
                <Btn1 title="Delete" styling="btn2" />
            </div>
        </div>
        </>
     );
}
 
export default FollowRequest;