import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div className='w-3/4 mx-auto min-h-screen text-center text-gray-600 pt-20 leading-[3] font-nunito text-xl'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='text-7xl text-red-600'>
                <i>404! {error.statusText || error.message}</i>

            </p>
            <Link className='text-blue-600 underline' to='/'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;