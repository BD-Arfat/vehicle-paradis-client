import React from 'react';
import Banner from '../Banner/Banner';
import Abouts from '../Abouts/Abouts';
import SellProduct from '../SellProduct/SellProduct';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Abouts/>
            <SellProduct/>
            <Contact/>
        </div>
    );
};

export default Home;