import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const SearchedPage = () => {
    const { pageNum } = useParams();
    const [searchParams] = useSearchParams();
    const highlightAyah = parseInt(searchParams.get("highlight"));
    const navigate = useNavigate();
    const ayahRefs = useRef({});
    const page = parseInt(pageNum);
    const [ayahs, setAyahs] = useState([]);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                setAyahs(data.data.ayahs);
                console.log(data.data.ayahs);

            })

    }, [pageNum])

    useEffect(() => {
        if (highlightAyah && ayahRefs.current[highlightAyah]) {
            ayahRefs.current[highlightAyah].scrollIntoView({ behavior: 'smooth', block: 'start' });

        }
    }, [ayahs, highlightAyah]);


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
            <h2 className='py-2'>Page No: {pageNum}</h2>
            {
                ayahs.map(ayah => <div key={ayah.number}>
                    {ayah.numberInSurah === 1 && (
                        <div className="my-6 text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-[#4F888B] border shadow-sm md:w-1/2 w-full mx-auto p-4">
                                Surah  {ayah.surah?.englishName}
                            </h2>

                            {/* {

                                suraNumber !== 1 && suraNumber !== 9 && (
                                    <p className="text-center md:text-4xl text-2xl font-hafs my-4 text-red-400 md:py-5 ">
                                        ﷽
                                    </p>
                                )
                            } */}

                        </div>
                    )}
                    
                    <p
                     
                        ref={(el) => (ayahRefs.current[ayah.number] = el)}
                        className={`py-3 ${highlightAyah == ayah.number ? 'bg-pink-100' : ""}`}
                    >
                        <span className="block font-hafs  text-2xl text-right leading-[2] border-b py-2">

                            {ayah.text}
                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>


                        </span>
                    </p>
                    </div>
                )
            }

            <div className='flex justify-between px-10 pb-10'>
                <button
                    className='btn btn-outline'
                    onClick={handlePrev}
                    disabled={page < 1}
                >
                    Previous
                </button>
                <span className='text-gray-500'>Page {page}</span>
                <button
                    className='btn btn-outline'
                    onClick={handleNext}
                    disabled={page > 604}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default SearchedPage;





// while hover on getOffsetLeft, wrong link showing//done

// next to do: show single page quran while go to specific ayah, 
// adding pagination 