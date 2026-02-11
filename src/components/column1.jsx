import React from 'react';
import Btn1 from '../components/button';
import './column1.css';
import Watch from './watch';
import './textstyles.css';

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
            <h4>Title</h4>
        </div>
        </>
     );
}
 
export default Column1;