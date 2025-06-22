import React from 'react';
import quranBanner from '../../../assets/images/quran-banner.jpg'
import CustomBtn2 from '../../../Components/CustomBtn2';

const Banner = () => {
    return (
        <div className='relative'>
            <div className="hero min-h-screen bg-[#ECFBF9] relative" >
                <div className="hero-content flex-col lg:flex-row-reverse md: gap-20">
                    <img
                        src={quranBanner}
                        className="rounded-lg shadow-2xl"
                    />
                    <div className='space-y-3 text-center md:text-left'>
                        <span className='my-10 bg-[#fff] text-[#42CDD0] border border-0 rounded-full px-4 py-2 text-sm font-light' >Know Your Deen</span>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#2C366E] md:leading-[1.5]">  Read! In the name of your lord, Who has created </h1>
                        <p className="py-6 font-light">
                            Read Quran and Quran Blog Online!
                            The best platform to read Quran.
                        </p>
                        <CustomBtn2 className="btn btn-primary">Get Started</CustomBtn2>
                    </div>
                </div>
                
            </div>
            <div class="custom-shape-divider-bottom-1750309795">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>

        </div>
    );
};

export default Banner;