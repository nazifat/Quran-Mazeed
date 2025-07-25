import React from 'react';
import quranBanner from '../../../assets/images/quran-banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen bg-[#ECFBF9]" >
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img
                        src={quranBanner}
                        className="rounded-lg shadow-2xl"
                    />
                    <div className='space-y-4'>
                        <span className='my-10 bg-[#C8F3F1] text-[#01ADD5] border rounded-full px-4 py-1 text-sm' >Know Your Deen</span>
                        <h1 className="text-5xl font-medium text-[#2C366E] leading-[1.5]">  Read! In the name of your lord, <br/> Who has created you</h1>
                        <p className="py-6 font-thin">
                           Read Quran and Quran Blog Online! 
                           The best platform to read Quran.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;