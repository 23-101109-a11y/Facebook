import React from 'react';
import './home.css';
import NavBar from '../components/navbar';
import Column1 from '../components/column1';
import Column2 from '../components/column2';
import Column3 from '../components/column3';

const Home = () => {
    return ( 
        <>
        <NavBar />
        <main>
            <Column1 />
            <Column2 />
            <Column3 />
        </main>
        </>
     );
}
 
export default Home;