import React, { useState, useEffect } from 'react';

const PrayerTime = () => {
    const [times, setTimes] = useState(null);
    const [error, setError] = useState(null);
    const [location, setLocation]= useState(null);
    const [date, setDate]= useState(null);

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

useEffect(()=>{
    //step 1: get location based on IP

    fetch('http://ipwho.is/')
    .then(res=> res.json())
    .then((locationData)=>{
        console.log('location data',locationData.city);
        setLocation(locationData.city)
        if(!locationData.success){
            setError('Could Not determine location from IP')
        }
        const latitude= locationData.latitude;
        const longitude= locationData.longitude;

        //step2: fetch prayer times using coordinates

        return fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`);

    })
    .then(res=>res.json())
    .then((data)=>{
        console.log('prayer time', data)
        setTimes(data.data.timings);
        setDate(data.data.date.gregorian);
    })
    .catch(err=>{
        console.error(err);
        setError('failed to load prayer times', err);
    })
},[])





    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (!times) return <p className="text-center">Loading prayer times…</p>;

    return (
        <div className="text-center bg-white p-6 rounded shadow-md max-w-sm mx-auto mt-8">
            <h3 className="text-xl font-bold mb-4">Your Local Prayer Times</h3>
            <p className="text-lg font-medium">📍 {location}</p>
            <p className="text-md">{date}</p>

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