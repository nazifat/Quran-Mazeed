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
            <div class="custom-shape-divider-bottom-1750309974">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>


        </div>
    );
};

export default Banner;