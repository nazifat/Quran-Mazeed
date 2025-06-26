import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const { pageNum } = useParams();

    const [pageData, setPageData] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    // const [currentPage, setCurrentPage] = useState(parseInt(pageNum) || 1);
    const [cleanedAyahs, setCleanedAyahs] = useState([]);
    const [suraNumber, setSuraNumber] = useState(null);
    const navigate = useNavigate();


    const totalPages = 604;
    const currentPage = parseInt(pageNum) || 1;




    useEffect(() => {

        fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                // console.log("quran by page", data.data);
                setPageData(data.data);
                const fetchedAyahs = data.data.ayahs;
                setAyahs(fetchedAyahs);
                console.log("ayahs", fetchedAyahs);
                // Store surah number once from the first ayah
                setSuraNumber(fetchedAyahs[0]?.surah?.number);
                 // Remove Basmala from first ayah if it's not Surah Fatiha or Tawbah
            const cleaned = fetchedAyahs.map((ayah, index) => {
                if (
                    ayah.numberInSurah === 1 &&
                    suraNumber !== 1 &&
                    suraNumber !== 9 &&
                    ayah.text.includes('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')
                ) {
                    return {
                        ...ayah,
                        text: ayah.text.replace(/بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ[\s\u064B-\u0652]*?/g, '').trim()
                    };
                }
                return ayah;
            });

            setAyahs(cleaned);


            });


           


        // Sync URL with currentPage
        // navigate(`/quranByPage/${currentPage}`, { replace: true });

    }, [currentPage]);

  


    const handlePrevious = () => {
        if (currentPage > 1)
            navigate(`/quranByPage/${currentPage - 1}`)
    }
    const handleNext = () => {
        if (currentPage < totalPages)
            navigate(`/quranByPage/${currentPage + 1}`)


    }
   


    return (
        <div>


            <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>
                <p>Page No: {currentPage}</p>

                {ayahs?.map(ayah => <div key={ayah.number}>
                    {ayah.numberInSurah === 1 && (
                        <div className="my-6 text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-[#4F888B] border shadow-sm w-1/4 mx-auto p-4">
                                Surah  {ayah.surah?.englishName}
                            </h2>

                            {
                                suraNumber !== '1' && suraNumber !== '9' && (
                                    <p className="text-center md:text-4xl text-2xl font-hafs my-4 text-[#2FD6D9] md:py-5 ">
                                        ﷽
                                    </p>
                                )
                            }

                        </div>
                    )}

                    <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0 border-b">
                        <span className="block font-hafs  text-2xl text-right leading-[2]">
                            {ayah.text}


                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>



                        </span>


                    </p>



                </div>)}
            </div>
            <div className='flex justify-center  gap-5 md:gap-10 items-center my-5'>
                <Link className='btn md:btn-md btn-xs' onClick={handlePrevious} disabled={currentPage === 1}>  Previous page</Link>
                <span className="font-medium text-gray-700 text-sm md:text-base">
                    Page {currentPage} of {totalPages}
                </span>

                <Link className='btn md:btn-md btn-xs' onClick={handleNext} disabled={currentPage === totalPages}>Next Page</Link>
            </div>
        </div>
    );
};

export default SinglePageQuran;