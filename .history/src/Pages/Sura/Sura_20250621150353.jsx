import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Sura = () => {

    const {suraNumber}= useParams();
    const [suraData, setSuraData]= useState(null);
    const suraNumberInt= parseInt(suraNumber);
    console.log(suraNumberInt);
    useEffect(()=>{
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumberInt}/ar`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSuraData(data);
        })
        .catch(err=>{
            console.err(err);
        })

    },[suraNumber])

    return (
        <div>
            
        </div>
    );
};

export default Sura;