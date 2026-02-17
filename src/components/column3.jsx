import React from 'react';
import Title from './title';
import './column3.css';
import FollowRequest from './request';
import News from './news';
import pfp from '../assets/pfp.jpg';
import pfp4 from '../assets/pfp4.svg';

const Column3 = () => {
    return ( 
        <>
        <div className="column3">
            <Title />
            <FollowRequest name="Guy Hawkins" pfp={pfp} />
            <FollowRequest name="Steven Parker" pfp={pfp4} />
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