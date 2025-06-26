import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const { juzNum } = useParams();
    const [juz, setJuz] = useState(parseInt(juzNum) || 1);
    const [ayahs, setAyahs] = useState([]);
    const [surahs, setSurahs] = useState(null);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("Juz", data.data);
                setJuz(data.data);
                setAyahs(data.data.ayahs);
                setSurahs(data.data.surahs);
                console.log("surahs", surahs);


            })

    }, [juzNum])


    return (
        <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>

            <p>Juz No. {juz.number}</p>
            <div className="my-6">



                {
                    ayahs?.map(ayah => (

                        <div key={ayah.number} className=''>


                            <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0 border-b text-right font-hafs text-2xl leading-[2]">
                                {ayah.text}
                                <span className="inline-block mx-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-full text-sm font-bold border border-[#4F888B] shadow-sm font-[Scheherazade] align-middle">
                                    {ayah.numberInSurah}
                                </span>
                            </p>




                        </div>))

                }
            </div>
        </div>
    );
};

export default SingleJuz;