import React from 'react';
import './button.css';

const Btn1 = (props) => {

    return ( 
        <>
        <button className={props.style}>
            {props.title}
            </button>
        </>
     );
}
 
export default Btn1;