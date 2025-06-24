import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const { pageNum } = useParams();

    const [pageNumber, setPageNumber] = useState(1);
    const [pageData, setPageData] = useState(null);
    const [ayahs, setAyahs] = useState([])

    useEffect(() => {
        const page = parseInt(pageNum);
        fetch(`https://api.alquran.cloud/v1/page/${page}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("quran by page", data.data);
                setPageData(data.data);
                setAyahs(data.data.ayahs);
                console.log("ayahs", ayahs)
            })

    }, [pageNumber]);


    const handlePrevious = () => {
        if (page > 1)
            setPage(page - 1);

    }
    const handleNext = () => {
        if (page < totalPages)
            setPage(page + 1);

    }

    return (
        <div>


            <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>
            <p>Page No: {pageNum}</p>

                {ayahs?.map(ayah => <div key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0">
                        <span className="block font-hafs  text-2xl text-right leading-[2]">
                            {ayah.text}


                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>



                        </span>


                    </p>

                    <div className='flex justify-center  gap-5 md:gap-10 items-center'>
                <Link className='btn md:btn-md btn-xs' onClick={handlePrevious} disabled={page === 1}>  Previous page</Link>
                <span className="font-medium text-gray-700 text-sm md:text-base">
                    Page {page} of {totalPages}
                </span>

                <Link className='btn md:btn-md btn-xs' onClick={handleNext} disabled={page === totalPages}>Next Page</Link>
            </div>

                </div>)}
            </div>
        </div>
    );
};

export default SinglePageQuran;