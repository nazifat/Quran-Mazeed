import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='text-7xl text-red-600'>
                <i>404 {error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;