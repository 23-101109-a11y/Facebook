import React from 'react';
import Btn1 from '../components/button';
import './column1.css';
import Watch from './watch';
import './textstyles.css';
import Title from './title';
import GroupProfile from './groupprofile';
import './button.css';
import grouppfp1 from '../assets/groupprofile1.jpg';
import grouppfp from '../assets/groupprofile.png';
import grouppfp3 from '../assets/grouppfp3.jpg';
import grouppfp4 from '../assets/grouppfp4.jpg';
import grouppfp5 from '../assets/grouppfp5.jpg';
import grouppfp6 from '../assets/grouppfp6.jpg';


const Column1 = () => {
    return ( 
        <>
        <div className="column1">
            <Btn1 title="Confirm" styling="btn1" />
            <div className="watch-column">
                <Watch />
                <Watch />
                <Watch />
                <Watch />
            </div>
            <Title />
            <GroupProfile groupname="مسجد حفصة" grouppfp={grouppfp1} />
            <GroupProfile groupname="UI / UX Designers & Developers" grouppfp={grouppfp} />
            <GroupProfile groupname="What To Eat" grouppfp={grouppfp3} />
            <GroupProfile groupname="Baking Essentials" grouppfp={grouppfp5} />
            <GroupProfile groupname="About Her" grouppfp={grouppfp4} />
            <GroupProfile groupname="The Cooking School" grouppfp={grouppfp6} />
        </div>
        </>
     );
}
 
export default Column1;