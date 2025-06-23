import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" font-nunito footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav className=''>

                    <p className='font-nunito text-2xl font-bold'>
                        Quran Mazeed
                        <br />
                        <span className='w-1/4 mx-auto text-base font-thin'>
                            Quran Mazeed is a clean and easy-to-use website for reading the Qur'an online, by page or surah, with beautiful Arabic script.
                        </span>

                    </p>

                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>


            <div className="text-center text-gray-600 text-sm mt-10 mb-5">
                © {new Date().getFullYear()} Quran Mazeed. All rights reserved.
                <br />
            </div>
        </div>

    );
};

export default Footer;