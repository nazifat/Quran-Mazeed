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
            <h1 className="text-2xl md:text-3xl w-1/4 mx-auto font-bold text-center text-gray-700 mb-6 tracking-wide font-inter border p-5 rounded bg-[#DAF5F0]">
                Surah {suraData?.englishName}
            </h1>



            <div className='grid grid-cols-1 text-right'>{suraData?.ayahs.map(ayah => (
                <div className='' key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 py-5">
                        <span className="block font-notoArabic text-2xl text-right leading-[1.5]">
                            {ayah.text}

                            <span className="mx-2 mt-2 px-3 py-1 bg-[#DAF5F0] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                 {ayah.numberInSurah}
                            </span>


                        </span>

                    </p>
                    <hr className="border-t border-gray-200 mt-3 py-2 ml-10" />
                </div>


            ))}</div>



        </div>

    );
};

export default Sura;