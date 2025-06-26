import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const {juzNum}= useParams();

    useEffect(()=>{
        
    },[juzNum])
    return (
        <div>
            <p>Juz No. {juzNum}</p>
        </div>
    );
};

export default SingleJuz;