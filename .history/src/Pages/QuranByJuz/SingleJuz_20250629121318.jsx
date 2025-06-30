import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const { juzNum } = useParams();
    const [juz, setJuz] = useState(parseInt(juzNum) || 1);
    const [ayahs, setAyahs] = useState([]);
    const [surahs, setSurahs] = useState({});
    const [currentJuz, setCurrentJuz]= useState(1);
    const totalJuz= 30;

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                console.log("Juz", data.data);
                setJuz(data.data);
                setAyahs(data.data.ayahs);
                const fetchedSurahs = data.data.surahs;
                setSurahs(fetchedSurahs);
                console.log("surahs", fetchedSurahs);


            })

    }, [juzNum])
 
    let prevSurahNumber = null;




    return (
   

        <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto  md:px-5 px-1'>

            <p>Juz No. {juz.number}</p>
            <div className="my-6">

                {/* <div>
                    {Object.values(surahs).map(surah => (<p key={surah.number}>{surah.name}</p>))}
                </div> */}


                {

                    ayahs?.map((ayah) => {

                        const currentSurahNum = ayah.surah.number;
                        const showSurahName = currentSurahNum !== prevSurahNumber;
                        prevSurahNumber = currentSurahNum;

                        const ayahText = ayah.text;
                        console.log(ayahText)
                        return (
                            <div key={ayah.number} className=''>

                                {showSurahName && surahs[currentSurahNum] && (
                                    <div>

                                        <h2 className="py-5 bg-pink-200 text-xl md:text-2xl font-bold text-[#4F888B] border text-center md:w-1/2 mx-auto w-1/2 shadow-sm md:w-1/4 w-full mx-auto p-4">

                                            {surahs[currentSurahNum].name}
                                        </h2>
                                    </div>
                                )}


                                <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0 border-b">
                                    <span className="block font-hafs  text-2xl text-right leading-[2]">
                                        {ayahText}


                                        {ayahText && <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-[100%] text-sm font-bold  border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                            {ayah.numberInSurah}
                                        </span>}



                                    </span>


                                </p>
                            </div>


                        );
                        <div className='flex justify-center  gap-5 md:gap-10 items-center my-5'>
                        <Link className='btn md:btn-md btn-xs' onClick={handlePrevious} disabled={currentJuz === 1}>  Previous Juz</Link>
                        <span className="font-medium text-gray-700 text-sm md:text-base">
                            Page {currentJuz} of {totalJuz}
                        </span>
        
                        <Link className='btn md:btn-md btn-xs' onClick={handleNext} disabled={currentJuz === totalJuz}>Next Juz</Link>
                    </div>
                    })
                }


            </div>



        </div >

    );
};

export default SingleJuz;