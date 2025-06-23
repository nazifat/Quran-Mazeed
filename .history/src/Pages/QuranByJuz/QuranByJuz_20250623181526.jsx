import React from 'react';

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
                            to={`/quranByPage/${juzNum}`}
                            className='px-4 py-4 cursor-pointer rounded my-2 w-1/2 md:w-3/4  border hover:border-[#2fd6d9] hover:shadow-xl'
                        >
                            Page {juzNum}
                        </Link>
                    )
                })
            }


        </div>

    </div>
    );
};

export default QuranByJuz;