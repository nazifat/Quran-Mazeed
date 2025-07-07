import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';
import Spinner from '../../Components/Spinner';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


const Root = () => {
    const navigation = useNavigation();
    const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Add or remove dark class based on isDark
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

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