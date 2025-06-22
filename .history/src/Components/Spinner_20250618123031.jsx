import React from 'react';

const Spinner = () => {
    return (
        <div>
            {console.log("loading")}
            <span className="loading loading-bars loading-xl "></span>
            <p className='text-6xl'>Loading</p>
        </div>
    );
};

export default Spinner;