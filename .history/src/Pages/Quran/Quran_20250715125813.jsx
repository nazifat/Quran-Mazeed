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
                <input type="radio" name="my_tabs_3" className="tab custom-tab " aria-label="Surah" defaultChecked />
                <div className="tab-content dark:bg-gray-600 bg-gray-200 dark:border-gray-500 p-6">

                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 text-center bg-gray dark:bg-gray-600'>



                        {
                            surahs.map(surah => (
                                <Link
                                    key={surah.number}
                                    to={`/quran/${surah.number}`}
                                    className="block dark:bg-black bg-white shadow-md rounded-xl p-5 hover:shadow-xl hover:border-[#2fd6d9] transition duration-300 border border-gray-200"
                                >
                                    <div className=" mb-2 text-gray-500">
                                        <p className="text-base dark:text-gray-100 font-notoArabic ">{surah.name}</p>
                                    </div>

                                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-100">
                                        {surah.number}. {surah.englishName}
                                    </h2>

                                    <p className="text-xs text-gray-500 mt-1 dark:text-gray-100">
                                        {surah.numberOfAyahs} Ayahs
                                    </p>
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab custom-tab " aria-label="Juz" />
                <div className="tab-content dark:bg-black bg-white border-base-300 p-6 dark:text-red-100">
                    <QuranByJuz></QuranByJuz>
                </div>
                <input type="radio" name="my_tabs_3" className="tab custom-tab" aria-label="Page" />
                <div className="tab-content dark:bg-base-100 bg-white border-base-300 p-6">
                    <QuranByPage></QuranByPage>
                
                
                </div>


            </div>

        </div>
    );
};

export default Quran;