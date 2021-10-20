import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.jpeg';
import banner2 from '../../../images/banner-2.jpeg';
import banner3 from '../../../images/banner-3.jpeg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Compassion Lives Here,Care That Lasts a Lifetime</h3>
                        <p className="text-dark fs-5">Our activities are managed and undertaken ethically we are family orientated and strong believer of family first.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Stay Healthy,Stay Happy</h3>
                        <p className="text-dark fs-5">The aim of medicine is to prevent disease and prolong life; the ideal of medicine is to eliminate the need of a physician.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Making The Difference</h3>
                        <p className="text-dark fs-5"> We will always be responsive to the pressing needs of the time. From a community needs point of view we serve that we will be nimble to meet those needs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;