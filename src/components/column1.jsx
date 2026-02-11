import React from 'react';
import Btn1 from '../components/button';
import './column1.css';
import Watch from './watch';
import './textstyles.css';
import Title from './title';
import GroupProfile from './groupprofile';

const Column1 = () => {
    return ( 
        <>
        <div className="column1">
            <Btn1 />
            <div className="watch-column">
                <Watch />
                <Watch />
                <Watch />
                <Watch />
            </div>
            <Title />
            <GroupProfile />
            <GroupProfile />
            <GroupProfile />
            <GroupProfile />
            <GroupProfile />
            <GroupProfile />
        </div>
        </>
     );
}
 
export default Column1;