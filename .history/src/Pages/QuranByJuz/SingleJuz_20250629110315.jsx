import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleJuz = () => {
    const { juzNum } = useParams();
    const [juz, setJuz] = useState({});
    const [ayahs, setAyahs] = useState([]);
    const [surahs, setSurahs] = useState({});

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`)
            .then(res => res.json())
            .then(data => {
                setJuz(data.data);
                setAyahs(data.data.ayahs);
                setSurahs(data.data.surahs);
            });
    }, [juzNum]);

    const trimBasmala = (ayah) => {
        const currentSurahNum = ayah.surah.number;
        const isBasmala =
            ayah.numberInSurah === 1 &&
            currentSurahNum !== 1 &&
            currentSurahNum !== 9 &&
            ayah.text.startsWith("بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ");

        return isBasmala ? "" : ayah.text;
    };

    let lastSurahNumber = null;

    return (
        <div className="grid grid-cols-1 text-right w-full md:w-3/4 mx-auto md:px-5 px-1">
            <p className="text-center my-4 text-xl font-bold">Juz No. {juz.number}</p>

            {ayahs.map((ayah) => {
                const currentSurahNum = ayah.surah.number;
                const showSurahName = currentSurahNum !== lastSurahNumber;
                const ayahText = trimBasmala(ayah);

                // Update for next iteration
                lastSurahNumber = currentSurahNum;

                return (
                    <div key={`${ayah.surah.number}-${ayah.numberInSurah}`}>
                        {showSurahName && surahs[currentSurahNum] && (
                            <div>
                                <h2 className="py-5 bg-pink-200 text-xl md:text-2xl font-bold text-[#4F888B] border text-center shadow-sm">
                                    {surahs[currentSurahNum].name}
                                </h2>
                            </div>
                        )}

                        <p className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0 border-b">
                            <span className="block font-hafs text-2xl text-right leading-[2]">
                                {ayahText}
                                {ayahText && (
                                    <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-full text-sm font-bold border border-[#4F888B] shadow-sm font-[Scheherazade]">
                                        {ayah.numberInSurah}
                                    </span>
                                )}
                            </span>
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default SingleJuz;
