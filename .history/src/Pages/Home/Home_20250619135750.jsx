import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div className=''>
            <div className='relative'>
                <Banner></Banner>
                <WaveDivider></WaveDivider>
            </div>

            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;