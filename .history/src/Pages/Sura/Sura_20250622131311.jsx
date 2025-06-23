import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setSuraData(data.data);
            })
            .catch(err => {
                console.err(err);
            })

    }, [suraNumber])





    return (
        <div className=' p-10'>
            <h1 className='text-center'>{suraData.englishName}</h1>


            <div className='grid grid-cols-1 text-right'>{suraData?.ayahs.map(ayah => (
                <div>
                    <p className=''>{ayah.text} <span> {ayah.numberInSurah}</span> </p>
                </div>

            ))}</div>



        </div>

    );
};

export default Sura;