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
                    <p className="text-lg leading-relaxed text-gray-800 mb-4">
                        <span className="block font-arabic text-2xl text-right">
                            {ayah.text}
                        </span>
                        <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-semibold">
                            {ayah.numberInSurah}
                        </span>
                    </p>
                </div>


            ))}</div>



        </div>

    );
};

export default Sura;