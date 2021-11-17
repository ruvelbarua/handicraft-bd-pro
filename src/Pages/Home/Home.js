import React from 'react';
import ImgSlider from '../Dashboard/ImgSlider/ImgSlider';
import Contact from '../Login/Contact/Contact';
import Register from '../Login/Register/Register';

import About from './About/About';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <ImgSlider></ImgSlider>
            <About></About>
            <Services></Services>
            <Register></Register>
            <Contact></Contact>
        </div>
    );
};

export default Home;