import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const {juzNum}= useParams();
    const [juz, setJuz]= useState(parseInt(juzNum) || 1)

    useEffect(()=>{
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
        .then(res=>res.json())
        .then(data=>{
            console.log("Juz",data.data);
            setJuz(data.data)

        })

    },[juzNum])


    return (
        <div>
            <p>Juz No. {juzNum}</p>
        </div>
    );
};

export default SingleJuz;