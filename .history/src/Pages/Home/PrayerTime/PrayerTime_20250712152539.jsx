import React, { useState, useEffect } from 'react';
// import PrayerBg from '../../../assets/images/prayerBg.png'
import '../PrayerTime/PrayerTime.css'

const PrayerTime = () => {
    const [times, setTimes] = useState(null);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [date, setDate] = useState(null);
    const [dayName, setDayName] = useState(null);

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
        //step 1: get location based on IP

        fetch('https://ipwho.is/')
            .then(res => res.json())
            .then((locationData) => {
                console.log('location data', locationData.city);
                setLocation(locationData.city)
                if (!locationData.success) {
                    setError('Could Not determine location from IP')
                }
                const latitude = locationData.latitude;
                const longitude = locationData.longitude;

                //step2: fetch prayer times using coordinates

                return fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=3`);

            })
            .then(res => res.json())
            .then((data) => {
                console.log('prayer time', data)
                setTimes(data.data.timings);
                setDate(data.data.date.readable);
                setDayName(data.data.date.gregorian.weekday.en);
            })
            .catch(err => {
                console.error(err);
                setError('failed to load prayer times', err);
            })
    }, [])





    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (!times) return <p className="text-center">Loading prayer times…</p>;

    return (
        <div className="flex flex-col md:flex-row items-center gap-2  justify-center w-full  min-h-screen mx-auto prayer-time p-5 md:p-20">
            <div className='w-full  md:w-1/2 '>

                <h3 className="dark:text-gray-200 text-2xl md:text-4xl font-bold mb-4  text-[#2C366D] ">Prayer Times of {location}</h3>

                <div className='pb-5'>
                    {/* <p className="text-lg font-medium">Your City: {location}</p> */}
                    <p className="dark:text-pink-200 text-lg text-blue-500 ">{dayName} {date} </p>
                </div>
            </div>
            <div className='text-center dark:bg-black bg-white  rounded-lg shadow-md max-w-sm  md:w-1/2 w-full mx-10 '>

                {/* <ul className="space-y-2 text-left">
                    {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Sunset', 'Isha',].map((name) => (
                        <li key={name} className="flex justify-between">
                            <span>{name}</span>
                            <span>{convertTo12Hour(times[name])}</span>

                        </li>
                    ))}
                </ul> */}

                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}

                        <thead className='bg-[#FEA38D] text-[#2C366D] text-xl '>
                            <tr>
                                <th>Prayer Name</th>
                                <th> Time</th>
                            </tr>
                        </thead>




                        <tbody className='text-gray-500 text-base'>
                            {/* row 1 */}

                            {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Sunset', 'Isha',].map((name) => (
                                <tr key={name} className='ml-5'>

                                    <th >{name}</th>
                                    <td className='mb-5 dark:text-gray-300'>{convertTo12Hour(times[name])}</td>
                                   
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PrayerTime;