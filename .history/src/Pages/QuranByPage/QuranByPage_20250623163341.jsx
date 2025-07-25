import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuranByPage = () => {


    const totalPages = 604;



    return (
        <div>

            <div className='grid lg:grid-cols-4 grid-cols-1'>
                {
                    [...Array(totalPages).keys()].map(i => {
                        const pageNum = i + 1;
                        return (
                            <Link key={pageNum}
                                to={`/quranByPage/${pageNum}`}
                                className='px-3 py-1'
                            >
                                Page Number: {pageNum}
                            </Link>
                        )
                    })
                }


            </div>

        </div>
    );
};

export default QuranByPage;