import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='font-nunito'>
            <footer className="footer sm:footer-horizontal font-nunito bg-gray-100 md:justify-evenly text-center md:text-left justify-center p-10">
                <nav>
                    <Link to="/" className="text-2xl font-bold text-gray-700 hover:text-[#63b5bb]">Quran Mazeed</Link>
                    <p className='max-w-xs text-justify leading-[1.5] text-[16px] text-gray-600'>Quran Mazeed is a clean and easy-to-use website for reading the Qur'an online, by page or surah, with beautiful Arabic script.</p>
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
                <nav className="grid-flow-col gap-4 items-center mt-10  ">
                <IoLogoFacebook />
                </nav>
            </footer>

        </div>

    );
};

export default Footer;