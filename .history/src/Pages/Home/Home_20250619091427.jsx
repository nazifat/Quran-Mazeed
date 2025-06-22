import React from 'react';
import Banner from './Banner/Banner';
import WaveDivider from '../../Components/Divider/WaveDivider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-sm">
                <WaveDivider />
            </div>

        </div>
    );
};

export default Home;