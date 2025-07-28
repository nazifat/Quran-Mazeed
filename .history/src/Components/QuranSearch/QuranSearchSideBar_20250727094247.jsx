import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuranSearchSideBar = () => {

    const [surahs, setSurahs] = useState([]);
    const [selectedSurah, setSelectedSurah] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [selectedSuraNumber, setSuraSelectedNumer] = useState(null);
    const [selectedAyah, setSelectedAyah] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/surah')
            .then(res => res.json())
            .then(data => setSurahs(data.data));
    }, [])

    const handleSurahChange = (e) => {
        // console.log(e.target.value);
        e.preventDefault();
        const surahNum = parseInt(e.target.value);
        setSuraSelectedNumer(surahNum);
        const surah = surahs.find(s => s.number === surahNum);
        setSelectedSurah(surah);
        setAyahs(Array.from({ length: surah.numberOfAyahs }, (_, i) => i + 1));
        setSelectedAyah(null);

    }

    const handleAyahChange = (e) => {
        e.preventDefault();
        // console.log("ayat", e.target.value);
        const ayahNumber = parseInt(e.target.value);
        setSelectedAyah(ayahNumber);

    }



    const handleGoClick = (e) => {
        // console.log(selectedSuraNumber, selectedAyah);

        if (selectedSuraNumber && selectedAyah) {
            fetch(`https://api.alquran.cloud/v1/ayah/${selectedSuraNumber}:${selectedAyah}`)
                .then(res => res.json())
                .then(data => {
                    const pageNum = data.data.page;
                    const globalAyahNumber = data.data.number;
                    navigate(`/quran/page/${pageNum}?highlight=${globalAyahNumber}`);
                })
        }

    }

    return (
        <div className='py-10 z-[9999999]'>

            {/* <h2>Go to the Verse Directly</h2> */}
            <div className='flex md:flex-row flex-col gap-4 justify-center'>
                <select
                    // defaultValue="Select a Surah"
                    value={selectedSuraNumber ?? ''}
                    onChange={handleSurahChange}
                    className='bg-white dark:bg-gray-600 border-gray-400 text-black dark:text-white select'>

                    <option disabled={true} value="" > Surah</option>
                    {
                        surahs.map(surah => (
                            <option key={surah.number} value={surah.number}>
                                {surah.number}. {surah.englishName}

                            </option>
                        ))
                    }
                </select>
                <select
                    defaultValue="Select an Ayah"
                    value={selectedAyah ?? ''}
                    onChange={handleAyahChange}
                    disabled={!selectedSurah}
                    className='bg-white dark:bg-gray-600 border-gray-400 text-black disabled:text-gray-200 disabled:bg-gray-400 dark:text-gray-100  select'>
                    <option disabled value=''>
                        Ayah
                    </option>
                    {
                        ayahs.map(ayahNum => (
                            <option key={ayahNum} value={ayahNum}>
                                {ayahNum}
                            </option>
                        ))
                    }
                </select>

                <button className='btn btn-ghost disabled:bg-gray-600 disabled:text-gray-400 bg-pink-300 text-gray-100'
                    onClick={handleGoClick}
                    disabled={!selectedSuraNumber || !selectedAyah}
                >  Go</button>
            </div>

        </div>

    );
};

export default QuranSearchSideBar;