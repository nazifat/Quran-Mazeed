import React from 'react';
import quranBanner from '../../../assets/images/quran-banner.jpg'
import CustomBtn2 from '../../../Components/CustomBtn2';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen bg-[#ECFBF9]" >
                <div className="hero-content flex-col lg:flex-row-reverse md: gap-20">
                    <img
                        src={quranBanner}
                        className="rounded-lg shadow-2xl"
                    />
                    <div className='space-y-3'>
                        <span className='my-10 bg-[#fff] text-[#42CDD0] border border-0 rounded-full px-4 py-2 text-sm font-light' >Know Your Deen</span>
                        <h1 className="text-5xl font-bold text-[#2C366E] leading-[1.25]">  Read! In the name of your lord, Who has created you</h1>
                        <p className="py-6 font-light">
                           Read Quran and Quran Blog Online! 
                           The best platform to read Quran.
                        </p>
                        <CustomBtn2 className="btn btn-primary">Get Started</CustomBtn2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;