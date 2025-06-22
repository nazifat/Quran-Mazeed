import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Sura = () => {

    const suraNumber= useParams();
    const [suraData, setSuraData]= useState(null)
    return (
        <div>
            
        </div>
    );
};

export default Sura;