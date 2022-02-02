import React from 'react';
import Contact from '../Login/Contact/Contact';
import Reviews from '../Shared/StyleComponent/Reviews/Reviews';
import Banner from './Banner/Banner';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;