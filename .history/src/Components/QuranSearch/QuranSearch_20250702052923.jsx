import React, { useState } from 'react';

const QuranSearch = () => {

    const [surahs, setSurahs]= useState([]);
    const [selecedSurah, setSelectedSurah]= useState(null);
    const [ayah, setAyah]= useState([]);
    return (
        <div className='flex gap-4 justify-center py-10'> 
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