import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
            // fetch('https://api.alquran.cloud/v1/page/1/quran-uthmani')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setSuraData(data.data);
                const firstPage = data.data.ayahs[0].page;
                setCurrentPage(firstPage);


            })
            .catch(err => {
                console.err(err);
            })

    }, [suraNumber])

    return (
        <div>

            {
                suraData?.ayahs.map(ayah => (
                    <p className='arabic-text' key={ayah.number}>{ayah.text}{ayah.numberInSurah}</p>
                ))
            }

        </div>
    );
};

export default Sura;