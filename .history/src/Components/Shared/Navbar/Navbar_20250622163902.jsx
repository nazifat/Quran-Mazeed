import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/navbar.css'
import CustomBtn from '../../CustomBtn';
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    const navlinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/quran">Quran</NavLink></li>

    </>
    return (
        <div className="navbar shadow-sm custom-navbar md:px-10 font-inter">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <Link to="/" className="block w-[100px] bg-green-100 ">
                    <img
                        src="https://i.ibb.co/27wzTfVq/Quran-Mazeed-Wordmark-with-Integrated-Quran-Icon-removebg-preview.png"
                        alt="Quran Mazeed Logo"
                        className="w-full h-auto"
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">

                <CustomBtn text="Donate">
                    <CiHeart size={24} />

                </CustomBtn>
            </div>
        </div>
    );
};

export default Navbar;