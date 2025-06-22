import React from 'react';
import Navbar from '../../Components/Shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';
import Spinner from '../../Components/Spinner';


const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
          {navigation.state === "loading" && <Spinner />}
          <Outlet />
        </div>
      );
    

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;