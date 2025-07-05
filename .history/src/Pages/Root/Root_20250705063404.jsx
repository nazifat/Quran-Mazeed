import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';
import Spinner from '../../Components/Spinner';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


const Root = () => {
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme= localStorage.getItem('theme');
        if(storedTheme=== 'dark')
            setDarkMode(true);
    },[])

    useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (

        <div className='pt-16'>

            {/* <ScrollToTop></ScrollToTop> */}
            <Navbar  darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>

            {navigation.state === "loading" && <Spinner />}

            <Outlet></Outlet>
            <Footer></Footer>
        </div>


    );
};

export default Root;