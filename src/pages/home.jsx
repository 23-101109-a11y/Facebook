import React from 'react';
import './home.css';
import NavBar from '../components/navbar';
import Column1 from '../components/column1';

const Home = () => {
    return ( 
        <>
        <NavBar />
        <main>
            <Column1 />
        </main>
        </>
     );
}
 
export default Home;