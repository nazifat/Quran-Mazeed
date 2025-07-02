import React from 'react';

const SearchedPage = () => {
    const [searchParams] = useSearchParams();
const highlightAyah = parseInt(searchParams.get("highlight"));
    return (
        <div>
            searched page
        </div>
    );
};

export default SearchedPage;