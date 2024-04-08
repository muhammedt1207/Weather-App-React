import React, { useState } from 'react';
import search_icon from '../Asset/search.png';
import cloud_icon from '../Asset/cloud.png';
import rain_icon from '../Asset/rain.png';
import wind_icon from '../Asset/wind.png';
import snow_icon from '../Asset/snow.png';
import humidity_icon from '../Asset/humidity.png';
import drizzle_icon from '../Asset/drizzle.png';
import clear_icon from '../Asset/clear.png';

function WeatherApp() {
    const [date, setDate] = useState(new Date());
    const weatherData = {
        temperature: '32°',
        humidity: '60%',
        wind: '10 km/h',
        status: 'Partly cloudy', 
    };
    const api_key=''
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center bg-slate-500 p-8 rounded-xl w-60 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <div className="text-center">
                    <div className="relative mb-4">
                        <input type="text" placeholder="Search" className="border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none pl-8 rounded-full" />
                        <img src={search_icon} alt="Search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm dark:text-gray-600">{date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-32 h-32 p-6 dark:text-yellow-600 fill-current">
                    {/* Use appropriate icon based on the weather status */}
                </svg>
                <div className="mb-2 text-3xl font-semibold">{weatherData.temperature}</div>
                <p className="dark:text-gray-600">{weatherData.status}</p>
                <div className="flex justify-between w-full mt-4">
                    <div className="flex items-center">
                        <img src={humidity_icon} alt="Humidity" className="w-6 h-6 mr-2" />
                        <p className="text-sm dark:text-gray-600">{weatherData.humidity}</p>
                    </div>
                    {/* Add margin to create space between humidity and wind */}
                    <div className="flex items-center ml-10">
                        <img src={wind_icon} alt="Wind" className="w-6 h-6 mr-2 " />
                        <p className="text-sm dark:text-gray-600">{weatherData.wind}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
