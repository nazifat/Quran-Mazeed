// ✅ File: useSurahAudio.js
import { useEffect, useState } from "react";

const useSurahAudio = (suraNumber) => {
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}/ar.alafasy`)
      .then(res => res.json())
      .then(data => {
        if (data.code === 200) {
          const ayahs = data.data.ayahs;
          setAudioData(ayahs);
        } else {
          console.error("Failed to load audio:", data);
        }
      })
      .catch(err => console.error("Audio fetch error:", err));
  }, [suraNumber]);

  return audioData;
};

export default useSurahAudio;