import React from 'react';
import Title from './title';
import './column3.css';
import FollowRequest from './request';

const Column3 = () => {
    return ( 
        <>
        <div className="column3">
            <Title />
            <FollowRequest />
            <FollowRequest />
            <Title />

        </div>
        </>
     );
}
 
export default Column3;