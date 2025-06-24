import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";


const QuranByPage = () => {


    const totalPages = 604;
    const [currentPage, setCurrentPage] = useState(1);

    const numberOfPagesPerPage = 20;
    const totalNmberOfPagination = Math.ceil(totalPages / numberOfPagesPerPage);
    const indexOfLastPage = numberOfPagesPerPage * currentPage;
    const indexOfFirstPage = indexOfLastPage - numberOfPagesPerPage;

    const pageNumbersToShow = [...Array(totalPages).keys()]
        .map(item => item + 1)
        .slice(indexOfFirstPage, indexOfLastPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }

    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)

    }



    return (
        <div>

            <div className='grid lg:grid-cols-4 grid-cols-1 font-nunito text-gray-600'>
                {
                    pageNumbersToShow.map(pageNum =>

                    (
                        <Link key={pageNum}
                            to={`/quranByPage/${pageNum}`}
                            className='px-4 py-4 cursor-pointer rounded my-2 w-3/4 mx-auto text-center md:w-3/4  border hover:border-[#2fd6d9] hover:shadow-xl'
                        >
                            Page {pageNum}
                        </Link>
                    )
                    )
                }


            </div>
            <div className='flex justify-center gap-10 '>
                <Link disabled={currentPage === 1} className=' btn btn-base' onClick={handlePrevious}> <GrLinkPrevious /> Previous</Link>
                <Link disabled={currentPage === totalPages} className=' btn btn-base' onClick={handleNext}>Next <GrLinkNext /></Link>

            </div>

        </div>
    );
};

export default QuranByPage;