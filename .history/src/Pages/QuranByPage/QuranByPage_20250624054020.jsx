import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuranByPage = () => {


    const totalPages = 604;
    const [currentPage, setCurrentPage]= useState(1);

    const numberOfPagesPerPage= 20;
    const totalNmberOfPagination= Math.ceil(totalPages/numberOfPagesPerPage);
    const indexOfLastPage= numberOfPagesPerPage* currentPage;
    const indexOfFirstPage= indexOfLastPage-numberOfPagesPerPage;

    const handlePrevious= ()=>{

    }

    const handleNext= ()=>{

    }



    return (
        <div>

            <div className='grid lg:grid-cols-4 grid-cols-1 font-nunito text-gray-600'>
                {
                    [...Array(totalPages).keys()].map(i => {
                        const pageNum = i + 1;
                        return (
                            <Link key={pageNum}
                                to={`/quranByPage/${pageNum}`}
                                className='px-4 py-4 cursor-pointer rounded my-2 w-3/4 mx-auto text-center md:w-3/4  border hover:border-[#2fd6d9] hover:shadow-xl'
                            >
                                Page {pageNum}
                            </Link>
                        )
                    })
                }

                <Link className='border btn' onClick={handlePrevious}>Previous</Link>
                <Link onClick={handleNext}>Next</Link>

            </div>

        </div>
    );
};

export default QuranByPage;