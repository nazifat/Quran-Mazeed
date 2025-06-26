import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const {juzNum}= useParams();
    const [juz, setJuz]= useState(parseInt(juzNum) || 1);
    const [ayahs, setAyahs]= useState([])

    useEffect(()=>{
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
        .then(res=>res.json())
        .then(data=>{
            console.log("Juz",data.data);
            setJuz(data.data);
            setAyahs(data.data.ayahs);


        })

    },[juzNum])


    return (
        <div>
            <p>Juz No. {juz.number}</p>
            <div>
                p

                {
                    ayahs.map(ayah=>(<div key={ayah.number}>

                        <p>{ayah.text}</p>



                    </div>))
                }
            </div>
        </div>
    );
};

export default SingleJuz;