import React from 'react';
import Navbar from '../../Components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';


const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;