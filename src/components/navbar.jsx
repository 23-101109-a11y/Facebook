import React from 'react';
import './navbar.css';
import logo from '../assets/logo.svg';
import HeaderItem from './headeritem';

const NavBar = () => {
    return ( 
        <>
        <header>
            <div className="logo"><img src={logo} alt="facebook logo" /></div>
            <div className="header">
            <div className="header-items">
                <HeaderItem />
                <HeaderItem />
                <HeaderItem />
                <HeaderItem />
            </div>
            </div>
        </header>
        </>
     );
}
 
export default NavBar;