import React from 'react';
import { Carousel } from 'react-bootstrap';
import Simg1 from '../../../images/Banner/bbg.jpg';
import Simg2 from '../../../images/Banner/bbgs.jpg';
import Simg3 from '../../../images/Banner/bcrd.jpg';
import Simg4 from '../../../images/Banner/bhr.jpg';
import Simg5 from '../../../images/Banner/bhrs.png';
import Simg6 from '../../../images/Banner/bpil1.jpg';
import Simg7 from '../../../images/Banner/wallpic.jpg';
import Simg8 from '../../../images/Banner/logo2.png';

const ImgSlider = () => {
    return (
        <div className="container my-3">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg1}
                        alt="Welcome"
                    />
                    <Carousel.Caption>
                        <h5>Welcome</h5>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg6}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg7}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>HANDICRAFT BD</h2>
                        <h5>Best Products in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Simg8}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ImgSlider;