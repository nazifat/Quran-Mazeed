import React, { use, useEffect, useState } from 'react';

const QuranByPage = () => {
    const [pageNumber, setPageNumber]=useState(1);
    const [pageData, setPageData]= useState(null);
    const [ayahs, setAyahs]= useState([])

    useEffect(()=>{
        fetch(`https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`)
        .then(res=>res.json())
        .then(data=>{
            console.log("quran by page", data.data);
            setPageData(data.data);
            setAyahs(data.data.ayahs);
        })

    },[pageNumber])


    return (
        <div>

            {ayahs.map(ayah=><div>

                <p>page number {ayah.page}</p>
            </div>)}
            
        </div>
    );
};

export default QuranByPage;