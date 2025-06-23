import React, { use, useEffect, useState } from 'react';

const QuranByPage = () => {
    const [pageNumber, setPageNumber]=useState(1);
    const [pageData, setPageData]= useState(null);

    useEffect(()=>{
        fetch(`https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`)
        .then(res=>res.json())
        .then(data=>{
            console.log("quran by page", data.data);
            setPageData(data.data);
        })

    },[pageNumber])


    return (
        <div>
            
        </div>
    );
};

export default QuranByPage;