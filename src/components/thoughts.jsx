import React from 'react';
import pfp2 from '../assets/pfp2.svg';
import upload1 from '../assets/upload1.svg';
import upload2 from '../assets/upload2.svg';
import upload3 from '../assets/upload3.svg';
import './thoughts.css';



const Thoughts = () => {
    return ( 
        <>
        <div className="thoughts">
            <div className="row1">
                <img src={pfp2} alt="Jenny's pfp" />
                <div className="thoughts-q">
                    <h4>What’s on your mind, Jenny</h4>
                </div>
            </div>
            <div className="line"></div>
            <div className="row2">
                <div className="upload">
                    <img src={upload1} alt="live icon" />
                    <h4>Live video</h4>
                </div>
                <div className="upload">
                    <img src={upload2} alt="photos icon" />
                    <h4>Photo/video</h4>
                </div>
                <div className="upload">
                    <img src={upload3} alt="mood icon" />
                    <h4>Feeling/activity</h4>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Thoughts;