import React from 'react';

const QuranSearch = () => {
    return (
        <div className='flex gap-4 justify-center'> 
            <select defaultValue="Select Surah" className="select">
                <option disabled={true}>Select a Surah</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
            <select defaultValue="Select an Ayah" className="select">
                <option disabled={true}>
                    Select an Ayah
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    );
};

export default QuranSearch;