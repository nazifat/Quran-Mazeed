import React from 'react';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
            
        </div>
    );
};

export default ErrorPage;