import React from 'react';
import worldicon from '../assets/worldicon.jpg';
import pfp3 from '../assets/pfp3.jpg';
import postimg from '../assets/postimg.jpg';
import './post.css';

const Post = () => {
    return ( 
        <>
        <div className="post">
            <div className="profile-row">
                <div className="person">
                <img src={pfp3} alt="Albert's pfp" />
                <div className="name-date">
                    <h4>Albert Flores</h4>
                    <div className="date">
                    <h6>2 d</h6>
                    <img src={worldicon} alt="world icon" />
                    </div>
                </div>
                </div>
                <h2>...</h2>
            </div>
            <img src={postimg} alt="landscape pic" />
        </div>
        </>
     );
}
 
export default Post;