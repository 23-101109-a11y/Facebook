import React from 'react';
import './navbar.css';
import logo from '../assets/logo.svg';
import HeaderItem from './headeritem';
import headeritem from '../assets/header-item.svg';
import headeritem2 from '../assets/watch-icon.svg';
import headeritem3 from '../assets/upload2.svg';
import headeritem4 from '../assets/upload3.svg';



const NavBar = () => {
    return ( 
        <>
        <header>
            <div className="logo"><img src={logo} alt="facebook logo" /></div>
            <div className="header">
            <div className="header-items">
                <HeaderItem headeritem={headeritem} />
                <HeaderItem headeritem={headeritem2} />
                <HeaderItem headeritem={headeritem3} />
                <HeaderItem headeritem={headeritem4} />
            </div>
            </div>
        </header>
        </>
     );
}
 
export default NavBar;