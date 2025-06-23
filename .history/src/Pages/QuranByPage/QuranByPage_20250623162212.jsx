import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuranByPage = () => {
   

    const totalPages = 604;



    return (
        <div>
            {
                [...Array(totalPages).keys()].map(i => {
                    const pageNum = i + 1;
                    return (
                        <Link key={pageNum}
                            to={`/quranByPage/${pageNum}`}
                            className='px-3 py-1'
                        >
                            {pageNum}
                        </Link>
                    )
                })
            }

        </div>
    );
};

export default QuranByPage;