import React from 'react';
import watchicon from '../assets/watch-icon.svg';
import './watch.css';
import './textstyles.css';

const Watch = () => {
    return ( 
        <div className="watch">
            <img src={watchicon} alt="play button icon" />
            <p>Watch</p>
        </div>
     );
}
 
export default Watch;