import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';
import Spinner from '../../Components/Spinner';


const Root = () => {
    const navigation = useNavigation();





    return (
        <>
            <div>

                <Navbar></Navbar>
                {navigation.state === "loading" && <Spinner />}

                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>

    );
};

export default Root;