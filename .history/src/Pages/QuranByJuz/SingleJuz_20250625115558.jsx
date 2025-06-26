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
            <div className="my-6 text-center">



                {
                    ayahs?.map(ayah => (<div key={ayah.number}>


                        <h2 className="text-xl md:text-2xl font-bold text-[#4F888B] border shadow-sm w-1/4 mx-auto p-4">

                            {ayah.text}</h2>



                    </div>))

                }
            </div>
        </div>
    );
};

export default SingleJuz;