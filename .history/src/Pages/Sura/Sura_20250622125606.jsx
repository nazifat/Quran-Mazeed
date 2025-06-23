import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);
   
    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setSuraData(data.data);
              


            })
            .catch(err => {
                console.err(err);
            })

    }, [suraNumber])

   

  

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>📖 Surah {suraNumber}  – Page {currentPage} </h2>

            <div style={{ padding: '20px' }}>
                {suraData.map((ayah, idx) => (
                    <p key={idx} style={{
                        fontSize: '28px',
                        direction: 'rtl',
                        textAlign: 'right',
                        lineHeight: '2.3em'
                    }}>
                        {ayah.text}
                        <span className="inline-block  text-xs w-10 h-10 text-center leading-10 rounded-full border border-gray-400 text-gray-700 mx-2">
                            {ayah.numberInSurah}
                        </span>
                    </p>
                ))}
            </div>
           

        </div>

    );
};

export default Sura;