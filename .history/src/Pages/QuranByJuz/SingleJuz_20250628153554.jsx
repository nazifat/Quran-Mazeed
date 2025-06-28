import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const { juzNum } = useParams();
    const [juz, setJuz] = useState(parseInt(juzNum) || 1);
    const [ayahs, setAyahs] = useState([]);
    const [surahs, setSurahs] = useState({});

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("Juz", data.data);
                setJuz(data.data);
                setAyahs(data.data.ayahs);
                const fetchedSurahs= data.data.surahs;
                setSurahs(fetchedSurahs);
                console.log("surahs", fetchedSurahs);


            })

    }, [juzNum])


    return (
        <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>

            <p>Juz No. {juz.number}</p>
            <div className="my-6">

               <div>
                {Object.values(surahs).map(surah=>(<p>{surah.name}</p>))}
               </div>


                {
                    ayahs?.map(ayah => (


                        <div key={ayah.number} className=''>
                            <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0 border-b">
                                <span className="block font-hafs  text-2xl text-right leading-[2]">
                                    {ayah.text}


                                    <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                        {ayah.numberInSurah}
                                    </span>



                                </span>


                            </p>







                        </div>))

                }
            </div>
        </div >
    );
};

export default SingleJuz;