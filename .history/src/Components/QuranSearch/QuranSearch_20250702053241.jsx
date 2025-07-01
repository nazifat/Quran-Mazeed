import React, { useEffect, useState } from 'react';

const QuranSearch = () => {

    const [surahs, setSurahs] = useState([]);
    const [selecedSurah, setSelectedSurah] = useState(null);
    const [ayah, setAyah] = useState([]);

    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/surah')
        .then(res=>res.json())
        .then(data=> setSurahs(data.data));
    }, [])
    return (
        <div className='flex gap-4 justify-center py-10'>
            <select defaultValue="Select Surah" className="select">
                <option disabled={true}>Select a Surah</option>
                {
                    surahs.map(surah=>(
                        <option key={surah.number} value={surah.number}>
                            {surah.englishName}

                        </option>
                    ))
                }
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