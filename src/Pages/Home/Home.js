import React from 'react';
import ImgSlider from '../Dashboard/ImgSlider/ImgSlider';
import Contact from '../Login/Contact/Contact';
import Register from '../Login/Register/Register';
import Products from '../Products/Products';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <ImgSlider></ImgSlider>
            <About></About>
            <Products></Products>
            <Register></Register>
            <Contact></Contact>
        </div>
    );
};

export default Home;