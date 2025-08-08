// src/hooks/useSuraData.js
import { useEffect, useState, useRef } from "react";
import useSurahAudio from "../hooks/useSurahAudio/useSurahAudio";

const useSuraData = (suraNumber, ayasPerPage = 10) => {
  const [suraDataArabic, setSuraDataArabic] = useState(null);
  const [ayahsArabic, setAyahsArabic] = useState([]);
  const [suraDataEnglish, setSuraDataEnglish] = useState(null);
  const [ayahsEnglish, setAyahsEnglish] = useState([]);
  const [suraDataBangla, setSuraDataBangla] = useState(null);
  const [ayahsBangla, setAyahsBangla] = useState([]);

  const [page, setPage] = useState(1);

  const suraAudio = useSurahAudio(suraNumber);

  // Audio states
  const [playingAyahNumber, setPlayingAyahNumber] = useState(null);
  const audioRef = useRef(null);

  /** --- Fetch Arabic surah --- */
  useEffect(() => {
    if (!suraNumber) return;
    fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar`)
      .then(res => res.json())
      .then(data => {
        setSuraDataArabic(data.data);
        setAyahsArabic(data.data.ayahs);
        setPage(1);
      })
      .catch(console.error);
  }, [suraNumber]);

  /** --- Fetch English translation --- */
  useEffect(() => {
    if (!suraNumber) return;
    fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/en.sahih`)
      .then(res => res.json())
      .then(data => {
        setSuraDataEnglish(data.data);
        setAyahsEnglish(data.data.ayahs);
      })
      .catch(err => console.error("Error loading English translation", err));
  }, [suraNumber]);

  /** --- Fetch Bangla translation --- */
  useEffect(() => {
    if (!suraNumber) return;
    fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/bn.bengali`)
      .then(res => res.json())
      .then(data => {
        setSuraDataBangla(data.data);
        setAyahsBangla(data.data.ayahs);
      })
      .catch(err => console.error("Error loading Bangla translation", err));
  }, [suraNumber]);

  /** --- Audio control --- */
  const handlePlayPause = (ayahNumber, audioUrl) => {
    if (playingAyahNumber === ayahNumber) {
      audioRef.current.pause();
      setPlayingAyahNumber(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
      setPlayingAyahNumber(ayahNumber);

      audioRef.current.onended = () => setPlayingAyahNumber(null);
    }
  };

  /** Cleanup audio on unmount */
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  /** --- Pagination logic --- */
  const totalPages = Math.ceil(ayahsArabic.length / ayasPerPage);
  const currentAyahs = ayahsArabic.slice(
    (page - 1) * ayasPerPage,
    page * ayasPerPage
  );

  return {
    // Data
    suraDataArabic,
    suraDataEnglish,
    suraDataBangla,
    ayahsEnglish,
    ayahsBangla,
    suraAudio,
    currentAyahs,

    // Pagination
    page,
    totalPages,
    setPage,

    // Audio
    handlePlayPause,
    playingAyahNumber,
  };
};

export default useSuraData;
