import React from 'react';
import './button.css';
import { useState } from 'react';

const Btn1 = (props) => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
        }

    const decrease = () => {
            setCount(count - 1);
            }

    return ( 
        <>
        <button onClick={() => increase()}>+</button> 
        <p>{count}</p>
        <button onClick={() => decrease()}>-</button> 
        <button className={props.styling}>
            {props.title}
            </button>
        </>
     );
}
 
export default Btn1;