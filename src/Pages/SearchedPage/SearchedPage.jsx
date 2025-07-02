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