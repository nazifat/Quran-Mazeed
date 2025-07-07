import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';
import Spinner from '../../Components/Spinner';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


const Root = () => {
    const navigation = useNavigation();
    const getInitialTheme = () => {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    const [darkMode, setDarkMode] = useState(getInitialTheme);
    // Add or remove dark class based on isDark
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (

        <div className='pt-16'>

            {/* <ScrollToTop></ScrollToTop> */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>

            {navigation.state === "loading" && <Spinner />}

            <Outlet></Outlet>
            <Footer></Footer>
        </div>


    );
};

export default Root;