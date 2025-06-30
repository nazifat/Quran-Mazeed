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

    const renderedAyahs = ayahs.reduce((acc, ayah) => {
        const currentSurahNum = ayah.surah.number;
        const showSurahName = currentSurahNum !== lastSurahNumber;
        const ayahText = trimBasmala(ayah);

        if (showSurahName && surahs[currentSurahNum]) {
            acc.push(
                <h2 key={`surah-${currentSurahNum}`} className="py-5 bg-pink-200 text-xl md:text-2xl font-bold text-[#4F888B] border text-center md:w-1/2 mx-auto shadow-sm">
                    {surahs[currentSurahNum].name}
                </h2>
            );
            lastSurahNumber = currentSurahNum;
        }

        acc.push(
            <p key={`${ayah.surah.number}-${ayah.numberInSurah}`} className="text-lg leading-relaxed text-gray-800 mb-4 md:py-5 py-0 border-b">
                <span className="block font-hafs text-2xl text-right leading-[2]">
                    {ayahText}
                    {ayahText && (
                        <span className="mx-2 mt-2 px-3 py-1 bg-[#AEE6F5] text-[#4F888B] rounded-full text-sm font-bold border border-[#4F888B] shadow-sm font-[Scheherazade]">
                            {ayah.numberInSurah}
                        </span>
                    )}
                </span>
            </p>
        );

        return acc;
    }, []);

    return (
        <div className="grid grid-cols-1 text-right w-full md:w-3/4 mx-auto md:px-5 px-1">
            <p className="text-center my-4 text-xl font-bold">Juz No. {juz.number}</p>
            <div className="my-6">{renderedAyahs}</div>
        </div>
    );
};

export default SingleJuz;
