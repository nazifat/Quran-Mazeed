import React, { useState, useEffect } from 'react';
import PrayerBg from '../../../assets/images/prayerBg.png'
import '../PrayerTime/PrayerTime.css'

const PrayerTime = () => {
    const [times, setTimes] = useState(null);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [date, setDate] = useState(null);

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

        fetch('http://ipwho.is/')
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

                return fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`);

            })
            .then(res => res.json())
            .then((data) => {
                console.log('prayer time', data)
                setTimes(data.data.timings);
                setDate(data.data.date.gregorian.date);
            })
            .catch(err => {
                console.error(err);
                setError('failed to load prayer times', err);
            })
    }, [])





    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (!times) return <p className="text-center">Loading prayer times…</p>;

    return (
        <div className="flex flex-col md:flex-row items-center gap-2  justify-center w-full  max-h-screen mx-auto prayer-time p-5 md:p-20">
            <div className='w-full  md:w-1/2'>

                <h3 className="text-4xl font-bold mb-4  text-[#2C366D]">Your Local Prayer Times</h3>

                <div className='pb-5'>
                    <p className="text-xl font-medium">Your City: {location}</p>
                    <p className="text-xl">Today's Date: {date}</p>
                </div>
            </div>
            <div className='text-center bg-white p-6 rounded shadow-md max-w-sm  md:w-1/2 w-full '>

                <ul className="space-y-2 text-left">
                    {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Sunset', 'Isha',].map((name) => (
                        <li key={name} className="flex justify-between">
                            <span>{name}</span>
                            <span>{convertTo12Hour(times[name])}</span>

                        </li>
                    ))}
                </ul>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PrayerTime;