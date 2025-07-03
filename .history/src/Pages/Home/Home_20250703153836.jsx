import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';
import AboutUs from './AboutUs/AboutUs';
import PrayerTime from './PrayerTime/PrayerTime';

const Home = () => {
    return (
        <div className='font-nunito'>
            <NavigateQuran></NavigateQuran>

            <div className='relative'>
                <Banner></Banner>
                <WaveDivider></WaveDivider>
            </div>


            <AboutUs></AboutUs>
            <PrayerTime></PrayerTime>
        </div>
    );
};

export default Home;