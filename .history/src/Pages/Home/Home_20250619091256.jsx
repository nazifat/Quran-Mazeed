import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto px-4">
                <WaveDivider />
            </div>

        </div>
    );
};

export default Home;