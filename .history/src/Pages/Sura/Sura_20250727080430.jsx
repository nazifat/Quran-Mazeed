import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import QuranSearch from '../../Components/QuranSearch/QuranSearch';
import useSurahAudio from '../../hooks/useSurahAudio/useSurahAudio';
import { FaPause, FaPlay } from "react-icons/fa";

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [page, setPage] = useState(1);
    const ayasPerPage = 10;

    const [suraDataEnglish, setSuraDataEnglish] = useState(null);
    const [ayahsEnglish, setAyahsEnglish] = useState([]);
    const [suraDataBangla, setSuraDataBangla] = useState(null);
    const [ayahsBangla, setAyahsBangla] = useState([]);

    const suraAudio = useSurahAudio(suraNumber);
    // State to track which ayah's audio is currently playing
    const [playingAyahNumber, setPlayingAyahNumber] = useState(null);

    // Single audio instance to control playback
    const audioRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setSuraData(data.data);
                setAyahs(data.data.ayahs);

                setPage(1);
            })
            .catch(err => {
                console.error(err);
            })

    }, [suraNumber]);


    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/en.sahih`)
            .then(res => res.json())
            .then(data => {
                // console.log("english sura data", data.data);
                setSuraDataEnglish(data.data);
                setAyahsEnglish(data.data.ayahs);

            })
            .catch(err => {
                console.error("error in loading english translation", err);
            })
    }
        , [suraNumber]);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/bn.bengali`)
            .then(res => res.json())
            .then(data => {
                console.log("bangla sura data", data.data);
                setSuraDataBangla(data.data);
                setAyahsBangla(data.data.ayahs)
            })
            .catch(err => {
                console.error("error in loading bangla translation", err);
            })

    }, [suraNumber])




    const totalPages = Math.ceil((ayahs?.length) / ayasPerPage);
    const indexOfLastAyah = ayasPerPage * page;
    const indexOfFirstAyah = indexOfLastAyah - ayasPerPage;
    const currentAyahs = ayahs?.slice(indexOfFirstAyah, indexOfLastAyah)

    // Play/pause handler for ayah audio
    const handlePlayPause = (ayahNumber, audioUrl) => {
        if (playingAyahNumber === ayahNumber) {
            audioRef.current.pause();
            setPlayingAyahNumber(null);
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            audioRef.current = new Audio(audioUrl);
            audioRef.current.play();
            setPlayingAyahNumber(ayahNumber);

            audioRef.current.onended = () => setPlayingAyahNumber(null);
        }
    };


    // Cleanup audio on component unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handlePrevious = () => {
        if (page > 1)
            setPage(page - 1);

    }
    const handleNext = () => {
        if (page < totalPages)
            setPage(page + 1);

    }

    const cleanedAyahs = currentAyahs.map((ayah, index) => {
        if (
            index === 0 &&
            ayah.text.startsWith('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')
        ) {
            return {
                ...ayah,
                text: ayah.text.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '').trim()
            };
        }
        return ayah;
    });

    // console.log("sura page e ayat", cleanedAyahs);

    return (
        <div className=' p-10'>
            <QuranSearch></QuranSearch>
            <h1 className="text-xl md:text-2xl md:w-1/4 w-full mx-auto font-bold text-center text-gray-700 mb-6 tracking-wide font-nunito border px-5 py-2 rounded-full bg-[#C8EFF9] hover:bg-[#AEE6F5] transition-colors duration-300">
                <span className='font-hafs text-base block my-2'> {suraData?.name}</span>
                Surah {suraData?.englishName}

            </h1>

            <p className='text-center my-2 dark:text-gray-100'>Page No. {page}</p>



            {
                suraNumber !== '1' && suraNumber !== '9' && page === 1 && (
                    <p className="text-center md:text-4xl text-2xl font-hafs my-4 text-[#2FD6D9] md:py-5 ">
                        ﷽
                    </p>
                )
            }

            <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto md:px-5 px-1'>{cleanedAyahs.map(ayah => (
                <div className='' key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100 mb-4 md:py-5 py-0">
                        <span className="block font-hafs text-2xl text-right leading-[2]">
                            {ayah.text}


                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>


                            {/* Play / Pause Button */}
                            {suraAudio.length > 0 && (
                                <button
                                    onClick={() => {
                                        const audioAyah = suraAudio.find(a => a.numberInSurah === ayah.numberInSurah);
                                        if (audioAyah) {
                                            handlePlayPause(ayah.numberInSurah, audioAyah.audio);
                                        }
                                    }}
                                    className="ml-4 bg-[#15B3B6] text-white px-4 py-2 rounded hover:bg-pink-400 flex items-center"
                                >
                                    {playingAyahNumber === ayah.numberInSurah ? <FaPause />
                                        : <FaPlay />
                                    }
                                </button>

                            )}
                        </span>



                    </p>


                    <div>
                        {ayahsEnglish.filter(ayahEng => ayahEng.numberInSurah === ayah.numberInSurah).map(ayahEng =>

                            <div className='' key={ayahEng.numberInSurah}>
                                <p className='text-left font-nunito leading-[1.75] dark:text-gray-100 ' >

                                    {ayahEng.text}

                                </p>


                            </div>
                        )}
                    </div>
                    <div>
                        {ayahsBangla.filter(ayahBng => ayahBng.numberInSurah === ayah.numberInSurah).map(ayahBng =>

                            <div className='' key={ayahBng.numberInSurah}>
                                <p className='text-left leading-[1.75] dark:text-gray-100 ' >

                                    {ayahBng.text}

                                </p>


                            </div>
                        )}
                    </div>
                    <hr className="border-t border-gray-200 mt-3 py-2 ml-10" />
                </div>


            ))}</div>

            <div className='flex justify-center  gap-5 md:gap-10 items-center'>
                <button className='btn md:btn-md btn-xs previous-btn' onClick={handlePrevious} disabled={page === 1}>  Previous page</button>
                <span className="font-medium text-gray-700 text-sm md:text-base">
                    Page {page} of {totalPages}
                </span>

                <button className='btn md:btn-md btn-xs next-btn' onClick={handleNext} disabled={page === totalPages}>Next Page</button>
            </div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-pink-400 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg z-[9999] text-xl md:text-2xl"
            >
                ⬆
            </button>



        </div>

    );
};

export default Sura;