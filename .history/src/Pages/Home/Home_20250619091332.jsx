import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" mx-auto">
                <WaveDivider />
            </div>

        </div>
    );
};

export default Home;