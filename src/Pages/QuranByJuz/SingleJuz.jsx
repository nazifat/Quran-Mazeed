import React from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const {juzNum}= useParams();
    return (
        <div>
            <p>Juz No. {juzNum}</p>
        </div>
    );
};

export default SingleJuz;