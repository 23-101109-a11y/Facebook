import React from 'react';
import Profile from './profile';
import './column2.css';
import Thoughts from './thoughts';
import Post from './post';

const Column2 = () => {
    return ( 
        <>
        <div className="column2">
        <div className="profiles">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
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