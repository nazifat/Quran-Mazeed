import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const { pageNum } = useParams();

    const [pageNumber, setPageNumber] = useState(1);
    const [pageData, setPageData] = useState(null);
    const [ayahs, setAyahs] = useState([])

    useEffect(() => {
        const page = parseInt(pageNum);
        fetch(`https://api.alquran.cloud/v1/page/${page}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("quran by page", data.data);
                setPageData(data.data);
                setAyahs(data.data.ayahs);
                console.log("ayahs", ayahs)
            })

    }, [pageNumber]);
    return (
        <div>
            <p>Page No: {pageNum}</p>


            <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>

                {ayahs?.map(ayah => <div key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0">
                        <span className="block font-hafs  text-2xl text-right leading-[2]">
                            {ayah.text}


                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>



                        </span>


                    </p>

                </div>)}
            </div>
        </div>
    );
};

export default SinglePageQuran;