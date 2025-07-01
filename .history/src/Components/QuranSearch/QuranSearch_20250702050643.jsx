import React from 'react';

const QuranSearch = () => {
    return (
        <div className='flex gap-4'> 
            <select defaultValue="Select Surah" className="select">
                <option disabled={true}>Select a Surah</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
            <select defaultValue="Select Surah" className="select">
                <option disabled={true}>Select a Surah</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
        </div>
    );
};

export default QuranSearch;