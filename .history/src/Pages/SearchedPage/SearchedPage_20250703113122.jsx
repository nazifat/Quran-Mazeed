import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const SearchedPage = () => {
    const {pageNum}= useParams();
    const [searchParams] = useSearchParams();
    const highlightAyah = parseInt(searchParams.get("highlight"));

    const ayahRef= useRef({});

    const [ayahs, setAyahs]= useState([]);

    useEffect(()=>{
        fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
        .then(res=> res.json)
        .then(data=>{
            setAyahs(data.data.ayahs);
            console.log(data.data);

        })

    },[pageNum])

    return (
        <div>
            searched page
        </div>
    );
};

export default SearchedPage;





// while hover on getOffsetLeft, wrong link showing//done

// next to do: show single page quran while go to specific ayah, 
// adding pagination 