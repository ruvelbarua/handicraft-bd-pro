import React from 'react';
// import Header from '../Dashboard/Header/Header';
// import Contact from '../Login/Contact/Contact';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;