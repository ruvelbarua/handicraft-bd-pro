import React from 'react';
import Contact from '../Login/Contact/Contact';
import Register from '../Login/Register/Register';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Register></Register>
            <Contact></Contact>
        </div>
    );
};

export default Home;