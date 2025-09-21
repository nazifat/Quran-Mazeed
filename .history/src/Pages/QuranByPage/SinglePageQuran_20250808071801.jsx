import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuranSearch from '../../Components/QuranSearch/QuranSearch';

const SinglePageQuran = () => {
  const { pageNum } = useParams();
  const [pageData, setPageData] = useState(null);
  const [ayahs, setAyahs] = useState([]);
  const [surahs, setSurahs] = useState({});
  const navigate = useNavigate();

  const totalPages = 604;
  const currentPage = parseInt(pageNum) || 1;

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
      .then(res => res.json())
      .then(data => {
        setPageData(data.data);
        const fetchedAyahs = data.data.ayahs;

        // Extract surahs appearing on this page
        const surahsOnPage = {};
        fetchedAyahs.forEach(ayah => {
          if (!surahsOnPage[ayah.surah.number]) {
            surahsOnPage[ayah.surah.number] = ayah.surah;
          }
        });
        setSurahs(surahsOnPage);

        // Clean Basmala from ayahs text (optional)
        const cleanedAyahs = fetchedAyahs.map((ayah) => {
          if (ayah.text.startsWith('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')) {
            return {
              ...ayah,
              text: ayah.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '').trim()
            };
          }
          return ayah;
        });

        setAyahs(cleanedAyahs);
      });
  }, [pageNum]);

  const handlePrevious = () => {
    if (currentPage > 1) navigate(`/quranByPage/${currentPage - 1}`);
  };
  const handleNext = () => {
    if (currentPage < totalPages) navigate(`/quranByPage/${currentPage + 1}`);
  };

  // Track last surah number to show heading only once
  let prevSurahNumber = null;

  return (
    <div>
      <QuranSearch />

      <div className='grid grid-cols-1 text-right w-full md:w-3/4 mx-auto md:px-5 px-1'>
        <p className='text-black dark:text-white mb-4'>Page No: {currentPage}</p>

        <div dir="rtl" lang="ar" className="text-lg text-gray-800 dark:text-gray-100" style={{ textAlign: 'right' }}>
          {ayahs.map((ayah) => {
            const
