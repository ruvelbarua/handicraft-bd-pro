import React from 'react';
import ImgSlider from '../Dashboard/ImgSlider/ImgSlider';
import Contact from '../Login/Contact/Contact';
import About from './Home/About/About';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <ImgSlider></ImgSlider>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;