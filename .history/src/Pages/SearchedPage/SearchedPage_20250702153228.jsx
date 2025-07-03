import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchedPage = () => {
    const [searchParams] = useSearchParams();
    const highlightAyah = parseInt(searchParams.get("highlight"));

    console.log(highlightAyah);
    return (
        <div>
            searched page
        </div>
    );
};

export default SearchedPage;


// while hover on getOffsetLeft, wrong link showing

// next to do: show single page quran while go to specific ayah, 
// adding pagination