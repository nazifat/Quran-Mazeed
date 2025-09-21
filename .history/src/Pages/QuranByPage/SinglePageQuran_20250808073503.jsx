import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuranSearch from '../../Components/QuranSearch/QuranSearch';

const SinglePageQuran = () => {
    const { pageNum } = useParams();
    const [pageData, setPageData] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [surahs, setSurahs] = useState({});
    const navigate = useNavigate();

    const totalPages = 604;
    const currentPage = parseInt(pageNum) || 1;

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                setPageData(data.data);
                const fetchedAyahs = data.data.ayahs;

                // Collect unique surahs on this page for headings
                const surahsOnPage = {};
                fetchedAyahs.forEach(ayah => {
                    if (!surahsOnPage[ayah.surah.number]) {
                        surahsOnPage[ayah.surah.number] = ayah.surah;
                    }
                });
                setSurahs(surahsOnPage);

                // Remove Basmala text from ayahs — we'll add it manually before first ayah
                const cleanedAyahs = fetchedAyahs.map(ayah => {
                    if (ayah.text.startsWith('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')) {
                        return {
                            ...ayah,
                            text: ayah.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '').trim(),
                        };
                    }
                    return ayah;
                });

                setAyahs(cleanedAyahs);
            });
    }, [pageNum]);

    const handlePrevious = () => {
        if (currentPage > 1) navigate(`/quranByPage/${currentPage - 1}`);
    };

    const handleNext = () => {
        if (currentPage < totalPages) navigate(`/quranByPage/${currentPage + 1}`);
    };

    let prevSurahNumber = null;

    return (
        <div>
            <QuranSearch />

            <div className="grid grid-cols-1 text-right w-full md:w-3/4 mx-auto md:px-5 px-1">
                <p className="text-black dark:text-white mb-4">Page No: {currentPage}</p>

                <div
                    dir="rtl"
                    lang="ar"
                    className="text-lg text-gray-800 dark:text-gray-100  bg-white dark:bg-[#1a1a1a]"
                    style={{ textAlign: 'right' }}
                >
                    {ayahs.map((ayah) => {
                        const currentSurahNum = ayah.surah.number;
                        const isNewSurah = currentSurahNum !== prevSurahNumber;
                        const isFirstAyahOfSurah = ayah.numberInSurah === 1;
                        prevSurahNumber = currentSurahNum;

                        return (
                            <React.Fragment key={ayah.number}>
                                {isNewSurah && surahs[currentSurahNum] && (
                                    <h2
                                        className="py-5 mb-5 bg-pink-200 text-xl md:text-2xl font-bold text-[#4F888B] border text-center md:w-1/2 mx-auto w-1/2 shadow-sm md:w-1/4 w-full mx-auto p-4"
                                        dir="ltr"
                                    >
                                        {surahs[currentSurahNum].englishName}
                                    </h2>
                                )}

                                {/* Basmala before first ayah only, except Surah 9 */}
                                {isFirstAyahOfSurah && currentSurahNum !== 9 && (
                                    <p
                                        className="text-center md:text-4xl text-2xl font-hafs my-4 text-[#2FD6D9] md:py-5 border-2 border-gray-400 rounded-xl p-6 shadow-md"
                                        dir="ltr"
                                    >
                                        ﷽
                                    </p>
                                )}
                                <div className='border-2'>
                                    <span className="inline font-taha text-2xl leading-[2]">
                                        {ayah.text}
                                        <span
                                            className="inline-block mx-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-full text-sm font-bold border border-[#4F888B] shadow-sm font-[Scheherazade] align-middle"
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            {ayah.numberInSurah}
                                        </span>{' '}
                                    </span>
                                </div>


                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center gap-5 md:gap-10 items-center my-5">
                <button
                    className="btn md:btn-md btn-xs previous-btn"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="font-medium text-gray-700 text-sm md:text-base text-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="btn md:btn-md btn-xs next-btn"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
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

export default SinglePageQuran;
