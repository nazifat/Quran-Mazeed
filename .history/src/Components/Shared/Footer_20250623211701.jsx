import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <div className='font-nunito'>
            <footer className="footer sm:footer-horizontal font-nunito bg-gray-100 md:justify-evenly text-center md:text-left justify-center p-10">
                <nav>
                    <Link to="/" className="text-2xl font-bold text-gray-700 hover:text-[#63b5bb]">Quran Mazeed</Link>
                    <p className='max-w-xs text-justify leading-[1.5] text-[16px] text-gray-600'>Quran Mazeed is a clean and easy-to-use website for reading the Qur'an online, by page or surah, with beautiful Arabic script.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Navlinks</h6>
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/contact">Contact</Link>
                    <Link className="link link-hover" to="/quran">Read Quran</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover"><MdOutlineMail />QuranMazeedBd@gmail.com</a>
                    <a className="link link-hover"><IoLocationOutline /> Dhaka, Bangladesh</a>
                 
                </nav>

            </footer>

            <footer className="footer justify-center sm:footer-horizontal bg-gray-200 shaddow-lg items-center p-4">
                <aside className="grid-flow-col items-center">

                    <p>Copyright © {new Date().getFullYear()}  Quran Mazeed. - All right reserved</p>
                </aside>

            </footer>
        </div>

    );
};

export default Footer;