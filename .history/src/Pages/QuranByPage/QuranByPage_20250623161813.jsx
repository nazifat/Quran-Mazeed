import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuranByPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageData, setPageData] = useState(null);
    const [ayahs, setAyahs] = useState([])

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("quran by page", data.data);
                setPageData(data.data);
                setAyahs(data.data.ayahs);
            })

    }, [pageNumber]);

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