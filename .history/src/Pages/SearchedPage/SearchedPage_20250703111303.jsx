import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchedPage = () => {
    const [searchParams] = useSearchParams();
    const highlightAyah = parseInt(searchParams.get("highlight"));

    const ayahRef= useRef({});

    const [ayahs, setAyahs]= useState([]);

    

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