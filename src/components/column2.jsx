import React from 'react';
import Profile from './profile';
import './column2.css';
import Thoughts from './thoughts';
import Post from './post';
import pfp from '../assets/pfp.jpg';

const Column2 = () => {
    return ( 
        <>
        <div className="column2">
        <div className="profiles">
            <Profile name="Islam Ali" pfp={pfp} />
            <Profile name="Souad Omar" pfp={pfp} />
            <Profile name="Jana Mahmoud" pfp={pfp} />
            <Profile name="Samia Ahmed" pfp={pfp} />
        </div>
        <Thoughts />
        <Post />
        <Post />
        <Post />
        </div>
        </>
     );
}
 
export default Column2;