import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuranByPage = () => {


    const totalPages = 604;



    return (
        <div>

            <div className='grid lg:grid-cols-4 grid-cols-1 font-nunito text-gray-600'>
                {
                    [...Array(totalPages).keys()].map(i => {
                        const pageNum = i + 1;
                        return (
                            <Link key={pageNum}
                                to={`/quranByPage/${pageNum}`}
                                className='px-4 py-4 cursor-pointer rounded my-2 w-3/2 border border-[#2fd6d9]'
                            >
                                Page {pageNum}
                            </Link>
                        )
                    })
                }


            </div>

        </div>
    );
};

export default QuranByPage;