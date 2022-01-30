import React from 'react';
import Contact from '../Login/Contact/Contact';
import InfoCard from '../Shared/StyleComponent/InfoCard/InfoCard';
import Banner from './Banner/Banner';
// import Reviews from './Reviews/Reviews';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Banner></Banner>
            <Services></Services>
            <InfoCard></InfoCard>
            {/* <Reviews></Reviews> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;