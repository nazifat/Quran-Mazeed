import React, { useEffect, useState } from 'react';
import '../Quran/Quran.css'
import { Link } from 'react-router-dom';
const Quran = () => {

    const [surahs, setSurahs] = useState([]);

    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/surah')
            .then(res => (res.json()))
            .then(data => {
                // console.log(data.data);
                setSurahs(data.data);
            })
            .catch(err => {
                console.err('Error fetching surahs', err);
            })
    }, [])
    return (
        <div className='w-3/4 mx-auto p-10'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Surah" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    <div className='grid grid-cols-4 gap-5 text-center' >
                      
                      
                      {
                        surahs.map(surah=>(
                            <Link key={surah.number} className='  max-w-sm rounded-lg border border-gray-500 px-2 py-5'>
                               <p>{surah.name}</p>

                               <h2>{surah.number}. {surah.englishName}</h2>
                               <p> {surah.numberOfAyahs} Ayahs</p>
                             </Link>
                        ))
                      } 
                    
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Juz"  />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>


            </div>

        </div>
    );
};

export default Quran;