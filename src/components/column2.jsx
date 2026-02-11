import React from 'react';
import Profile from './profile';
import './column2.css';
import Thoughts from './thoughts';

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
        </div>
        </>
     );
}
 
export default Column2;