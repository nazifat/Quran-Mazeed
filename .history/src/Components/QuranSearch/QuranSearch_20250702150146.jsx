import React, { useEffect, useState } from 'react';

const QuranSearch = () => {

    const [surahs, setSurahs] = useState([]);
    const [selecedSurah, setSelectedSurah] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [suraNumber, setSuraNumer]=useState(null);

    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/surah')
            .then(res => res.json())
            .then(data => setSurahs(data.data));
    }, [])

    const handleSurahChange = (e) => {
        console.log(e.target.value);

        const surahNumber = parseInt(e.target.value);
        setSuraNumer(suraNumber);
        const surah = surahs.find(s => s.number === surahNumber);
        setSelectedSurah(surah);
        setAyahs(Array.from({ length: surah.numberOfAyahs }, (_, i) => i + 1));


    }

    const handleAyahChange= (e)=>{
        console.log("ayat", e.target.value);
    }

    return (
        <div className='py-10'> 

            {/* <h2>Go to the Verse Directly</h2> */}
            <div className='flex gap-4 justify-center'>
                <select defaultValue="Select a Surah" onChange={handleSurahChange} className="select">
                    <option disabled={true}>Select a Surah</option>
                    {
                        surahs.map(surah => (
                            <option key={surah.number} value={surah.number}>
                                {surah.number}. {surah.englishName}

                            </option>
                        ))
                    }
                </select>
                <select defaultValue="Select an Ayah" onChange={handleAyahChange} disabled={!selecedSurah} className="select">
                    <option disabled={true}>
                        Select an Ayah
                    </option>
                    {
                        ayahs.map(ayahNum => (
                            <option key={ayahNum} value={ayahNum}>
                                {ayahNum}
                            </option>
                        ))
                    }
                </select>
            </div>

        </div>

    );
};

export default QuranSearch;