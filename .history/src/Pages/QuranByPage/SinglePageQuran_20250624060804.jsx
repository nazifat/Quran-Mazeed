import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const {pageNum}= useParams();

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
                console.log("ayahs",ayahs)
            })

    }, [pageNumber]);
    return (
        <div>
            <p>Page No: {pageNum}</p>
            <div>
                {ayahs?.map(ayah=> <div key={ayah.numberInSurah}>
                    <p>{ayah.text}</p>

                </div>)}
            </div>
        </div>
    );
};

export default SinglePageQuran;