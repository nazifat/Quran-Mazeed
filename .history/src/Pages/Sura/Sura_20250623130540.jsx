import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Sura = () => {

    const { suraNumber } = useParams();
    const [suraData, setSuraData] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [page, setPage] = useState(1);
    const ayasPerPage = 10;



    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setSuraData(data.data);
                setAyahs(data.data.ayahs);
                
                setPage(1); 
            })
            .catch(err => {
                console.err(err);
            })

    }, [suraNumber]);


    const totalPages = Math.ceil((ayahs?.length) / ayasPerPage);
    const indexOfLastAyah = ayasPerPage * page;
    const indexOfFirstAyah = indexOfLastAyah - ayasPerPage;
    const currentAyahs = ayahs?.slice(indexOfFirstAyah, indexOfLastAyah)



    const handlePrevious = () => {
        if(page>1)
        setPage(page-1);

    }
    const handleNext = () => {
        if(page<totalPages)
        setPage(page+1);

    }

    const cleanedAyahs = ayahs.map((ayah, index) => {
        if (
          index === 0 &&
        //   suraNumber !== '1' &&
        //   suraNumber !== '9' &&
          ayah.text.startsWith('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')
        ) {
          return {
            ...ayah,
            text: ayah.text.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '').trim()
          };
        }
        return ayah;
      });



    return (
        <div className=' p-10'>
            <h1 className="text-xl md:text-2xl md:w-1/4 w-full mx-auto font-bold text-center text-gray-700 mb-6 tracking-wide font-inter border px-5 py-2 rounded-lg bg-[#C8EFF9] hover:bg-[#AEE6F5] transition-colors duration-300">
                <span className='font-hafs text-base block my-2'> {suraData?.name}</span>
                Surah {suraData?.englishName}

            </h1>

            <p className='text-center'>Page No. {page}</p>

            

              {
                (suraNumber!==1?
                    <p>Bismillah</p>
                    )
              }


            <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>{cleanedAyahs.map(ayah => (
                <div className='' key={ayah.numberInSurah}>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0">
                        <span className="block font-notoArabic text-2xl text-right leading-[2]">
                            {ayah.text}

                            <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                {ayah.numberInSurah}
                            </span>


                        </span>

                    </p>
                    <hr className="border-t border-gray-200 mt-3 py-2 ml-10" />
                </div>


            ))}</div>

            <div className='flex justify-center  gap-10'>
                <Link className='btn btn-lg' onClick={handlePrevious} disabled={page === 1}>  Previous page</Link>
                <span className="font-medium text-gray-700">
                    Page {page} of {totalPages}
                </span>

                <Link className='btn btn-lg' onClick={handleNext} disabled={page === totalPages}>Next Page</Link>
            </div>



        </div>

    );
};

export default Sura;