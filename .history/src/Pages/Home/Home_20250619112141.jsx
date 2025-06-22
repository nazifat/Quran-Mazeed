import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <WaveDivider></WaveDivider>
        </div>
    );
};

export default Home;