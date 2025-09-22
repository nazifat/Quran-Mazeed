import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import NavigateQuran from '../../Components/NavigateQuran/NavigateQuran';
import QuranSearch from '../../Components/QuranSearch/QuranSearch';
import useSurahTranslation from '../../hooks/useSurahTranslation';
import useSurahAudio from '../../hooks/useSurahAudio';

const SearchedPage = () => {
    const { pageNum } = useParams();
    const [searchParams] = useSearchParams();
    const highlightAyah = parseInt(searchParams.get("highlight"));
    const navigate = useNavigate();
    const ayahRefs = useRef({});
    const page = parseInt(pageNum);
    const [suraNumber, setSuraNumber] = useState(null);
    const { translationDataEng, ayahs: ayahsEnglish } = useSurahTranslation(suraNumber, 'en.sahih');
    const { translationDataBengali, ayahs: ayahsBangla } = useSurahTranslation(suraNumber, 'bn.bengali');
    const [ayahs, setAyahs] = useState([]);
        // Single audio instance to control playback
        const audioRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                setAyahs(data.data.ayahs);
                console.log(data.data.ayahs);
                const fetchedAyahs = data.data.ayahs;
                setSuraNumber(fetchedAyahs[0]?.surah?.number);


                const cleanedAyahs = fetchedAyahs.map((ayah, index) => {
                    if (
                        // index === 0 &&
                        // suraNumber !== 1 &&
                        // suraNumber !== 9 &&
                        ayah.text.startsWith('بِّسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')
                    ) {
                        return {
                            ...ayah,
                            text: ayah.text.replace('بِّسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '').trim()
                        };
                    } else if (
                        // index === 0 &&
                        // suraNumber !== 1 &&
                        // suraNumber !== 9 &&
                        ayah.text.startsWith('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')
                    ) {
                        return {
                            ...ayah,
                            text: ayah.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '').trim()
                        };
                    }
                    return ayah;
                });

                setAyahs(cleanedAyahs);


            })

    }, [pageNum])

    useEffect(() => {
        if (highlightAyah && ayahRefs.current[highlightAyah]) {
            ayahRefs.current[highlightAyah].scrollIntoView({ behavior: 'smooth', block: 'start' });

        }
    }, [ayahs, highlightAyah]);


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


    const handlePrev = () => {
        if (page > 1) {
            navigate(`/quran/page/${page - 1}`);
        }


    }

    const handleNext = () => {
        if (page < 604) {
            navigate(`/quran/page/${page + 1}`);
        }

    }


    return (
        <div className='px-10 text-right py-10'>
            <QuranSearch></QuranSearch>
            <h2 className='py-2 text-black dark:text-white'>Page No: {pageNum}</h2>
            {
                ayahs.map(ayah => <div key={ayah.number}>
                    {ayah.numberInSurah === 1 && (
                        <div className="my-6 text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-[#4F888B] border shadow-sm md:w-1/2 w-full mx-auto p-4">
                                Surah  {ayah.surah?.englishName}
                            </h2>

                            {

                                suraNumber !== 1 && suraNumber !== 9 && (
                                    <p className="text-center md:text-4xl text-2xl font-taha my-4 text-[#2FD6D9] md:py-5 ">
                                        ﷽
                                    </p>
                                )
                            }

                        </div>
                    )}
                    <div className='border-b'>
                        <p

                            ref={(el) => (ayahRefs.current[ayah.number] = el)}
                            className={`py-3 px-2 ${highlightAyah == ayah.number ? 'dark:bg-gray-400 bg-pink-200' : ""}`}
                        >
                            {/* Play / Pause Button */}
                            {suraAudio.length > 0 && (
                                <button
                                    onClick={() => {
                                        const audioAyah = suraAudio.find(a => a.numberInSurah === ayah.numberInSurah);
                                        if (audioAyah) {
                                            handlePlayPause(ayah.numberInSurah, audioAyah.audio);
                                        }
                                    }}
                                    className="ml-4 bg-[#15B3B6] text-white px-2 py-1 text-xs rounded hover:bg-pink-400 items-center"
                                >
                                    {playingAyahNumber === ayah.numberInSurah ? <FaPause />
                                        : <FaPlay />
                                    }
                                </button>

                            )}
                            <span className="block font-taha  text-2xl text-right leading-[2] py-2 dark:text-white text-black" >

                                {ayah.text}
                                <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                    {ayah.numberInSurah}
                                </span>


                            </span>
                            {ayahsEnglish.filter(ayahEng => ayahEng.numberInSurah === ayah.numberInSurah).map(ayahEng =>

                                <div className='' key={ayahEng.numberInSurah}>
                                    <p className='text-left font-nunito leading-[1.75] dark:text-gray-100 ' >

                                        {ayahEng.text}

                                    </p>


                                </div>
                            )}
                            {ayahsBangla.filter(ayahBn => ayahBn.numberInSurah === ayah.numberInSurah).map(ayahBn =>

                                <div className='' key={ayahBn.numberInSurah}>
                                    <p className='text-left font-nunito leading-[1.75] dark:text-gray-100 ' >

                                        {ayahBn.text}

                                    </p>


                                </div>
                            )}
                        </p>
                    </div>


                </div>
                )
            }

            <div className='flex justify-between px-10 pb-10 items-center pt-5'>
                <button
                    className='btn btn-outline previous-btn dark:text-white'
                    onClick={handlePrev}
                    disabled={page < 2}
                >
                    Previous
                </button>
                <span className='text-gray-500 p-2 text-center'>Page {page}</span>
                <button
                    className='btn btn-outline next-btn dark:text-white'
                    onClick={handleNext}
                    disabled={page > 604}
                >
                    Next
                </button>
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

export default SearchedPage;





// while hover on getOffsetLeft, wrong link showing//done

// next to do: show single page quran while go to specific ayah, 
// adding pagination 