import React from 'react';
import twitch from '../assets/twitch.svg';
import './news.css';

const News = () => {
    return ( 
        <>
        <div className="news-card">
            <div className="news-img">
            <img src={twitch} alt="twitch logo" />
            </div>
            <div className="info">
                <h5>Twitch apologises as streamers</h5>
                <p>Twitch has apologised, after a backlash over new, advertising rules.</p>
                <p className='blue'>See more</p>
            </div>
        </div>
        </>
     );
}
 
export default News;