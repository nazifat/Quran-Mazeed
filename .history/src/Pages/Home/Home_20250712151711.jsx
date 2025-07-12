import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';
import AboutUs from './AboutUs/AboutUs';
import PrayerTime from './PrayerTime/PrayerTime';
import NavigateQuran from '../../Components/NavigateQuran/NavigateQuran';

const Home = () => {
    return (
        <div className='font-nunito'>
            <div className='relative dark:bg-red-400'>
                <Banner></Banner>
                <WaveDivider></WaveDivider>
            </div>
            <div className='text-center'>

            </div>

            <AboutUs></AboutUs>
            <PrayerTime></PrayerTime>
        </div>
    );
};

export default Home;