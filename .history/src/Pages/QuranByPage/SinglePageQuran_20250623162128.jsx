import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const {pageNum}= useParams();
    return (
        <div>
            <p>Single page: {pageNum}</p>
        </div>
    );
};

export default SinglePageQuran;