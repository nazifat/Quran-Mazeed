import React, { useEffect, useState } from 'react';
import '../Quran/Quran.css'
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
        <div className='w-3/4 mx-auto'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Surah" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    <div className='grid grid-cols-4 gap-10' >
                      
                      
                      {
                        surahs.map(surah=>(
                            <div key={surah.number} className=''>
                               <h2>{surah.number} {surah.name}</h2>

                            
                             </div>
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