import React from 'react';
// import quranBanner2 from '../../../assets/images/quran-banner.jpg'
// import quranBanner from '../../../assets/images/banner.png'
import CustomBtn2 from '../../../Components/CustomBtn2';
// import QuranSearch from '../../../Components/QuranSearch/QuranSearch'
import '../Banner/Banner.css'
import { Link } from 'react-router-dom';
import NavigateQuran from '../../../Components/NavigateQuran/NavigateQuran';

const Banner = () => {
    return (
        <div className='relative' >
            <div className="hero min-h-screen bg-[#ECFBF9] relative" >
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 w-full max-w-7xl px-4 sm:px-6 md:px-8">

                    <div className=''>
                        <img
                            src="https://i.ibb.co/bMJ9CHCN/pngtree-muslimah-woman-reading-quran-vector-png-image-6672794-removebg-preview.png"
                            className="animate-slide-in-right max-w-sm md:max-w-lg"
                        />

                    </div>

                    <div className='space-y-4 text-center md:text-left max-w-xs lg:max-w-full'>
                        <div className='relative  overflow-hidden'>
                            <div className='animate-slide-in-left'>
                                <span className='my-10 bg-[#fff] text-[#42CDD0] border border-0 rounded-full px-4 py-4 text-sm font-bold animate-slide-in-left' >Know Your Deen</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl animate-slide-in-top font-bold text-[#2C366E]">

                            The Best Platform to Read Quran Online</h1>
                        <p className=" font-light animate-slide-in-left
                          text-sm sm:text-base overflow-hidden border-r-0">
                            And We have certainly made the Quran easy to remember.
                            So is there anyone who will be mindful? (54:40)
                        </p>
                        <div className='relative  overflow-hidden md:flex-row flex flex-col items-center gap-5 '>
                            {/* <div className='animate-slide-in-left '> */}

                                <CustomBtn2 className="" link='quran'>Read Quran</CustomBtn2>

                            {/* </div> */}
                            <NavigateQuran></NavigateQuran>

                            



                        </div>

                    </div>
                </div>


            </div>




        </div>
    );
};

export default Banner;