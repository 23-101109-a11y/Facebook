import React from 'react';
import Title from './title';
import './column3.css';
import FollowRequest from './request';
import News from './news';

const Column3 = () => {
    return ( 
        <>
        <div className="column3">
            <Title />
            <FollowRequest />
            <FollowRequest />
            <Title />
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
        </div>
        </>
     );
}
 
export default Column3;