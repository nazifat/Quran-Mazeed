import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const navigate = useNavigate();


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

    // Step 2: Get all ayahs on the current page
    useEffect(() => {
        if (currentPage) {
            fetch(`https://api.alquran.cloud/v1/page/${currentPage}/quran-uthmani`)
                .then(res => res.json())
                .then(data => {
                    setAyahs(data.data.ayahs);
                });
        }
    }, [currentPage]);

    // Step 3: Handle next / prev
    const handleNext = () => {
        if (currentPage < 604) setCurrentPage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };


    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>📖 Surah {suraNumber} {suraData.name} – Page {currentPage} </h2>

            <div style={{ padding: '20px' }}>
                {ayahs.map((ayah, idx) => (
                    <p key={idx} style={{
                        fontSize: '28px',
                        direction: 'rtl',
                        textAlign: 'right',
                        lineHeight: '2.3em'
                    }}>
                        {ayah.text}
                    </p>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <button onClick={handlePrev} disabled={currentPage <= 1}>⬅ Previous</button>
                <button onClick={handleNext} disabled={currentPage >= 604}>Next ➡</button>
            </div>

        </div>

    );
};

export default Sura;