import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowAltCircleUp } from "react-icons/fa";
import QuranSearch from '../../Components/QuranSearch/QuranSearch';
const SingleJuz = () => {
    const { juzNum } = useParams();
    const [juz, setJuz] = useState(parseInt(juzNum) || 1);
    const [ayahs, setAyahs] = useState([]);
    const [surahs, setSurahs] = useState({});
    const currentJuz = parseInt(juzNum) || 1;
    const totalJuz = 30;
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                // console.log("Juz", data.data);
                setJuz(data.data);
                data.data.ayahs = data.data.ayahs.map(ayah => {
                    return {
                        ...ayah,
                        text: ayah.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '').trim()
                    };
                });
                setAyahs(data.data.ayahs);
                const fetchedSurahs = data.data.surahs;
                setSurahs(fetchedSurahs);
                console.log("surahs", data.data.ayahs);


            })

    }, [juzNum])

    let prevSurahNumber = null;



    const handlePrevious = () => {
        if (currentJuz > 1)
            navigate(`/quranByJuz/${currentJuz - 1}`)
    }
    const handleNext = () => {
        if (currentJuz < totalJuz)
            navigate(`/quranByJuz/${currentJuz + 1}`)


    }

    return (


        <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1 py-10'>
            <QuranSearch></QuranSearch>
            <p className='text-gray-600 dark:text-gray-100'>Juz No. {juz.number}</p>
            <div
                className="my-6 text-right"
                dir="rtl"
                lang="ar"
            >
                {Object.values(surahs).map((surah) => (
                    <div key={surah.number} className="mb-6">
                        {/* Surah Heading */}
                        <h2
                            className="py-5 bg-pink-200 text-xl md:text-2xl font-bold text-[#4F888B] border text-center md:w-1/2 mx-auto w-1/2 shadow-sm md:w-1/4 w-full mx-auto p-4"
                            dir="ltr"
                        >
                            {surah.name}
                        </h2>
                        {surah.number !== 9 && (
                            <p
                                className="text-center md:text-4xl text-2xl font-hafs my-4 text-[#2FD6D9] md:py-5"
                                dir="ltr"
                            >
                                ﷽
                            </p>
                        )}
                        {/* Inline ayahs for this surah */}
                        <div>
                            {ayahs
                                .filter((ayah) => ayah.surah.number === surah.number)
                                .map((ayah) => (
                                    <span
                                        key={ayah.number}
                                        className="font-taha text-2xl leading-[2] inline text-gray-800 dark:text-gray-200"
                                        style={{ whiteSpace: 'normal' }}
                                    >
                                        {ayah.text}
                                        <span
                                            className="inline-block mx-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-full text-sm font-bold border border-[#4F888B] shadow-sm font-[Scheherazade] align-middle"
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            {ayah.numberInSurah}
                                        </span>{' '}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center  gap-5 md:gap-10 items-center my-5'>
                <button className='btn md:btn-md btn-xs previous-btn' onClick={handlePrevious} disabled={currentJuz === 1}>  Previous Juz</button>
                <span className="font-medium text-gray-700 text-sm md:text-base text-center">
                    Juz {currentJuz} of {totalJuz}
                </span>

                <button className='btn md:btn-md btn-xs next-btn' onClick={handleNext} disabled={currentJuz === totalJuz}>Next Juz</button>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-pink-400 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg z-[9999] text-xl md:text-2xl"
            >
                ⬆
            </button>





        </div >


    );
};

export default SingleJuz;