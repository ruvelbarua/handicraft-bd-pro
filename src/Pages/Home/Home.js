import React from 'react';
import Contact from '../Login/Contact/Contact';
import Register from '../Login/Register/Register';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import InfoCard from '../Shared/StyleComponent/InfoCard/InfoCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <Register></Register>
            <Contact></Contact>
        </div>
    );
};

export default Home;