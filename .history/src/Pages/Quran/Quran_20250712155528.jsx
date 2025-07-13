import React, { useEffect, useState } from 'react';
import '../Quran/Quran.css'
import { Link } from 'react-router-dom';
import QuranByPage from '../QuranByPage/QuranByPage';
import QuranByJuz from '../QuranByJuz/QuranByJuz';
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
        <div className='md:w-3/4 w-full mx-auto md:p-10 p-0 m-2 custom-quran ' >
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift"

            >
                <input type="radio" name="my_tabs_3" className="tab custom-tab" aria-label="Surah" defaultChecked />
                <div className="tab-content dark:bg-base-100 bg-skyblue dark:border-base-300 p-6">

                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 text-center'>



                        {
                            surahs.map(surah => (
                                <Link
                                    key={surah.number}
                                    to={`/quran/${surah.number}`}
                                    className="block bg-white shadow-md rounded-xl p-5 hover:shadow-xl hover:border-[#2fd6d9] transition duration-300 border border-gray-200"
                                >
                                    <div className=" mb-2 text-gray-500">
                                        <p className="text-base font-notoArabic ">{surah.name}</p>
                                    </div>

                                    <h2 className="text-lg font-semibold text-gray-600">
                                        {surah.number}. {surah.englishName}
                                    </h2>

                                    <p className="text-xs text-gray-500 mt-1">
                                        {surah.numberOfAyahs} Ayahs
                                    </p>
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab custom-tab " aria-label="Juz" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <QuranByJuz></QuranByJuz>
                </div>
                <input type="radio" name="my_tabs_3" className="tab custom-tab " aria-label="Page" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <QuranByPage></QuranByPage>
                
                
                </div>


            </div>

        </div>
    );
};

export default Quran;