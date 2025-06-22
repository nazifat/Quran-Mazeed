import React, { useState, useEffect } from 'react';

const PrayerTime = () => {
    const [times, setTimes] = useState(null);
    const [error, setError] = useState(null);
    const convertTo12Hour = (time24) => {
        const [hours, minutes] = time24.split(':');
        const date = new Date();
        date.setHours(+hours);
        date.setMinutes(+minutes);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    };




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
        <div className="text-center bg-white p-6 rounded shadow-md max-w-sm mx-auto mt-8">
            <h3 className="text-xl font-bold mb-4">Your Local Prayer Times</h3>
            {/* <p className="text-lg font-medium">📍 {location}</p>
            <p className="text-md">{today}</p> */}

            <ul className="space-y-2 text-left">
                {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((name) => (
                    <li key={name} className="flex justify-between">
                        <span>{name}</span>
                        <span>{convertTo12Hour(times[name])}</span>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrayerTime;