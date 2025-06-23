import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);
    const [ayahs, setAyahs]= useState(null);
    const [pages, setPages]= useState(1);
    const ayatPerPage= 10;



    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setSuraData(data.data);
                setAyahs(data.data.ayahs);
            })
            .catch(err => {
                console.err(err);
            })

    }, [suraNumber])

    const handlePrevious = () => {

    }
    const handleNext = () => {

    }



    return (
        <div className=' p-10'>
            <h1 className="text-xl md:text-2xl md:w-1/4 w-full mx-auto font-bold text-center text-gray-700 mb-6 tracking-wide font-inter border px-5 py-2 rounded-lg bg-[#C8EFF9] hover:bg-[#AEE6F5] transition-colors duration-300">
                <span className='font-hafs text-base block my-2'> {suraData?.name}</span>
                Surah {suraData?.englishName}

            </h1>




            <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>{suraData?.ayahs.map(ayah => (
                <div className='' key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0">
                        <span className="block font-notoArabic text-2xl text-right leading-[2]">
                            {ayah.text}

                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>


                        </span>

                    </p>
                    <hr className="border-t border-gray-200 mt-3 py-2 ml-10" />
                </div>


            ))}</div>

            <div className='flex justify-center  gap-10'>
                <Link className='btn btn-lg' onClick={() => handlePrevious}>  Previous page</Link>
                <Link className='btn btn-lg' onClick={() => handleNext}>Next Page</Link>
            </div>



        </div>

    );
};

export default Sura;