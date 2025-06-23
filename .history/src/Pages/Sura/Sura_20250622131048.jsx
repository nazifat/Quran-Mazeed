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
        <div className=''>

            <div className='grid grid-cols-1 text-right'>{suraData?.ayahs.map(ayah => (
                <div>
                    <h1></h1>
                    <span className=''>{ayah.text}</span>
                </div>

            ))}</div>



        </div>

    );
};

export default Sura;