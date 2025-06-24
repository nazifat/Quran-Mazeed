import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const { pageNum } = useParams();

    const [pageNumber, setPageNumber] = useState(1);
    const [pageData, setPageData] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 604;
    useEffect(() => {
        const page = parseInt(pageNum);
        setCurrentPage(page);
        fetch(`https://api.alquran.cloud/v1/page/${currentPage}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("quran by page", data.data);
                setPageData(data.data);
                setAyahs(data.data.ayahs);
                console.log("ayahs", ayahs)
            })

    }, [pageNumber]);


    const handlePrevious = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);

    }
    const handleNext = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1);

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