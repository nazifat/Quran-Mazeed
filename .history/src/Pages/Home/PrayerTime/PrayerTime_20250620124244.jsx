import React, { useState, useEffect } from 'react';

const PrayerTime = () => {
    const [times, setTimes] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Get user location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
    
              // Fetch prayer times
              fetch(
                `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
              )
                .then((res) => res.json())
                .then((data) => {
                  setTimes(data.data.timings);
                })
                .catch((err) => {
                  console.error(err);
                  setError('Failed to load prayer times.');
                });
            },
            () => {
              setError('Location permission denied.');
            }
          );
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      }, []);
    
      if (error) return <p className="text-red-500 text-center">{error}</p>;
      if (!times) return <p className="text-center">Loading prayer times…</p>;

    return (
        <div>

        </div>
    );
};

export default PrayerTime;