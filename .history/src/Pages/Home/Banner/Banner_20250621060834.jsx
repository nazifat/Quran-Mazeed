import React from 'react';
import quranBanner2 from '../../../assets/images/quran-banner.jpg'
import quranBanner from '../../../assets/images/banner.png'
import CustomBtn2 from '../../../Components/CustomBtn2';
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="hero min-h-screen bg-[#ECFBF9] relative " >
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-20 w-full max-w-xs md:max-w-sm">
                    <img
                        src={quranBanner}
                        className="md:animate-slide-in-right max-w-sm"
                    />
                    <div className='space-y-4 text-center md:text-left w-full max-w-xs md:max-w-lg'>
                        <div className='relative  overflow-hidden'>
                            <div className='md:animate-slide-in-left'>
                                <span className='my-10 bg-[#fff] text-[#42CDD0] border border-0 rounded-full px-4 py-2 text-sm font-light md:animate-slide-in-left' >Know Your Deen</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl md:animate-slide-in-top font-bold text-[#2C366E] md:leading-[1.5]">
                            
                            The Best Platform to Read Quran Online</h1>
                        <p className="py-6 font-light animate-typing
                        overflow-hidden whitespace-nowrap border-r-4 border-red">
                            And We have certainly made the Quran easy to remember.
                            So is there anyone who will be mindful? (54:40)
                        </p>
                        <div className='relative  overflow-hidden '>
                            <div className='animate-slide-in-left'>
                                <CustomBtn2 className="">Read Quran</CustomBtn2>

                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default Banner;