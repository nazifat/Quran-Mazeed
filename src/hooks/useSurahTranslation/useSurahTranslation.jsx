// src/hooks/useSurahTranslation.js
import { useEffect, useState } from 'react';

const useSurahTranslation = (suraNumber, langCode = 'en.sahih') => {
  const [translationData, setTranslationData] = useState(null);
  const [ayahs, setAyahs] = useState([]);

  useEffect(() => {
    if (!suraNumber) return;

    fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/${langCode}`)
      .then(res => res.json())
      .then(data => {
        setTranslationData(data.data);
        setAyahs(data.data.ayahs);
      })
      .catch(err => {
        console.error(`Error loading ${langCode} translation`, err);
      });
  }, [suraNumber, langCode]);

  return { translationData, ayahs };
};

export default useSurahTranslation;
