import React from 'react';
import quranBanner2 from '../../../assets/images/quran-banner.jpg'
import quranBanner from '../../../assets/images/banner.png'
import CustomBtn2 from '../../../Components/CustomBtn2';
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="hero min-h-screen bg-[#ECFBF9] relative" >
                <div className="hero-content flex-col lg:flex-row-reverse md: gap-20">
                    <img
                        src={quranBanner}
                        className=" shadow-2xl animate-slide-in-right"
                    />
                    <div className='space-y-3 text-center md:text-left'>
                        <div className='relative  overflow-hidden'>
                            <div className='animate-slide-in-left'>
                                <span className='my-10 bg-[#fff] text-[#42CDD0] border border-0 rounded-full px-4 py-2 text-sm font-light animate-slide-in-left' >Know Your Deen</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl animate-slide-in-top font-bold text-[#2C366E] md:leading-[1.5]">  Read! In the name of your lord, Who has created </h1>
                        <p className="py-6 font-light animate-typing
                        overflow-hidden whitespace-nowrap border-r-4 border-red">
                            Read Quran and Quran Blog Online!
                            The best platform to read Quran.
                        </p>
                        <div className='relative  overflow-hidden'>
                            <div className='animate-slide-in-left'>
                                <CustomBtn2 className="">Get Started</CustomBtn2>

                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default Banner;