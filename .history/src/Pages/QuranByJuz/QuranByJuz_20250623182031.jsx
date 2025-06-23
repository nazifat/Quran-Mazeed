import React from 'react';
import { Link } from 'react-router-dom';

const QuranByJuz = () => {
    const totalJuz= 30;
    return (
        <div>

        <div className='grid lg:grid-cols-4 grid-cols-1 font-nunito text-gray-600'>
            {
                [...Array(totalJuz).keys()].map(i => {
                    const juzNum = i + 1;
                    return (
                        <Link key={juzNum}
                            to={`/quranByJuz/${juzNum}`}
                            className='px-4 py-4 cursor-pointer rounded text-center my-2 w-3/4 mx-auto md:w-3/4  border hover:border-[#2fd6d9] hover:shadow-xl'
                        >
                            Juz {juzNum}
                        </Link>
                    )
                })
            }


        </div>

    </div>
    );
};

export default QuranByJuz;