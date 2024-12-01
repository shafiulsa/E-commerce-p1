import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PopulerManue from '../PopulerManue/PopulerManue';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopulerManue></PopulerManue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;