import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/navbar.css'
import CustomBtn from '../../CustomBtn';
import { CiHeart } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import NavigateQuran from '../../NavigateQuran/NavigateQuran';

const Navbar = ({ darkMode, setDarkMode }) => {



    const navlinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
        {/* <li><NavLink to="/about">About</NavLink></li> */}
        <li><NavLink to="/quran">Quran</NavLink></li>
        {/* <li><NavLink to="/tazweed">Tazweed</NavLink></li> */}
        {/* <NavLink> <NavigateQuran></NavigateQuran> </NavLink> */}

        {/* <li>

            <button

                className=" bg-gray-600 :bg-gray-800 rounded"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
        </li> */}

    </>
    return (
        <div className="navbar dark:text-[#fff] dark:bg-[#000] fixed top-0 z-50 bg-[#ffffff]  shadow-sm  custom-navbar md:px-10 font-inter">
            <div className="navbar-start ">
                <div className="dropdown text-gray-400">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 text-[#0FD2D6] text-xl font-bold">
                    <img
                        src="https://i.ibb.co.com/4RXcJcRP/png-transparent-quran-icon-thumbnail-removebg-preview.png"
                        alt="Quran Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <span className="hidden sm:inline-block">Quran Kareem</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button

                    className=" bg-gray-600 px-4 py-2 :bg-gray-800 rounded"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <MdOutlineLightMode /> : <MdDarkMode className='text-gray-100' />}
                </button>

                <CustomBtn text="Contribute" url="/donate">
                    <CiHeart size={24} />

                </CustomBtn>
            </div>
        </div>
    );
};

export default Navbar;