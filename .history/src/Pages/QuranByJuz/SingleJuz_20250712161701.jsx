import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowAltCircleUp } from "react-icons/fa";
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
                console.log("Juz", data.data);
                setJuz(data.data);
                setAyahs(data.data.ayahs);
                const fetchedSurahs = data.data.surahs;
                setSurahs(fetchedSurahs);
                console.log("surahs", fetchedSurahs);


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


        <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>

            <p>Juz No. {juz.number}</p>
            <div className="my-6">
                {/* <div className="relative top-12 right-12 z-50">
                    <button
                        onClick={scrollToBottom}
                        className="p-3 rounded-full bg-gradient-to-br from-[#AEE6F5] to-[#4F888B] text-white shadow-lg hover:scale-110 transition-transform duration-300"
                        aria-label="Scroll to bottom"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div> */}

                {/* <div>
                    {Object.values(surahs).map(surah => (<p key={surah.number}>{surah.name}</p>))}
                </div> */}


                {

                    ayahs?.map((ayah) => {

                        const currentSurahNum = ayah.surah.number;
                        const showSurahName = currentSurahNum !== prevSurahNumber;
                        prevSurahNumber = currentSurahNum;

                        const ayahText = ayah.text;
                        console.log(ayahText)
                        return (
                            <div key={ayah.number} className=''>

                                {showSurahName && surahs[currentSurahNum] && (
                                    <div>

                                        <h2 className="py-5 bg-pink-200 text-xl md:text-2xl font-bold text-[#4F888B] border text-center md:w-1/2 mx-auto w-1/2 shadow-sm md:w-1/4 w-full mx-auto p-4">

                                            {surahs[currentSurahNum].name}
                                        </h2>
                                    </div>
                                )}


                                <p className="text-lg  px-2 leading-relaxed text-gray-800 dark:text-gray-100  mb-4 md:py-5 py-0 border-b">
                                    <span className="block font-hafs  text-2xl text-right leading-[2]">
                                        {ayahText}


                                        {ayahText && <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                            {ayah.numberInSurah}
                                        </span>}



                                    </span>


                                </p>
                            </div>



                        );

                    })
                }


            </div>
            <div className='flex justify-center  gap-5 md:gap-10 items-center my-5'>
                <Link className='btn md:btn-md btn-xs' onClick={handlePrevious} disabled={currentJuz === 1}>  Previous Juz</Link>
                <span className="font-medium text-gray-700 text-sm md:text-base">
                    Juz {currentJuz} of {totalJuz}
                </span>

                <Link className='btn md:btn-md btn-xs' onClick={handleNext} disabled={currentJuz === totalJuz}>Next Juz</Link>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-red hover:bg-[#3a6668] text-white px-4 py-2 rounded-full shadow-lg z-[9999]"
            >
                ⬆
            </button>




        </div >


    );
};

export default SingleJuz;