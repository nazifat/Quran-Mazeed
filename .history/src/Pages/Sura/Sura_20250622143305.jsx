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
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6 tracking-wide font-inter">
                Surah {suraData?.englishName}
            </h1>



            <div className='grid grid-cols-1 text-right'>{suraData?.ayahs.map(ayah => (
                <div className='' key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 py-5">
                        <span className="block font-notoArabic text-2xl text-right">
                            {ayah.text}

                            <span className="mx-2 mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold tracking-wider border border-yellow-300 shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>

                        </span>

                    </p>
                    <hr className="border-t border-gray-300 mt-3 py-2 ml-10" />
                </div>


            ))}</div>



        </div>

    );
};

export default Sura;