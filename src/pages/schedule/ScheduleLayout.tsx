import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const ScheduleLayout: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
    const minDeg = time.getMinutes() * 6;
    const secDeg = time.getSeconds() * 6;

    const sidebarContent = (
        <div className="flex flex-col gap-6">
            {/* Clock */}
            <div className="flex flex-col items-center justify-center border-b pb-6 mb-4">
                <div className="relative w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center">
                    {/* Hour Hand */}
                    <div 
                        className="absolute w-1 h-6 bg-gray-800 rounded-full top-6 transform origin-bottom transition-transform duration-500"
                        style={{ transform: `rotate(${hourDeg}deg)` }}
                    ></div>
                    {/* Minute Hand */}
                    <div 
                        className="absolute w-1 h-8 bg-gray-600 rounded-full top-4 transform origin-bottom transition-transform duration-500"
                        style={{ transform: `rotate(${minDeg}deg)` }}
                    ></div>
                    {/* Second Hand */}
                    <div 
                        className="absolute w-0.5 h-9 bg-red-500 rounded-full top-3 transform origin-bottom transition-transform duration-100"
                        style={{ transform: `rotate(${secDeg}deg)` }}
                    ></div>
                    {/* Center Dot */}
                    <div className="w-2 h-2 rounded-full bg-gray-400 z-10"></div>
                </div>
            </div>

            {/* Mini Calendars */}
            <div className="flex flex-col gap-4 text-[10px] px-2">
                <div className="flex flex-col gap-1">
                    <div className="font-bold text-center text-gray-500 mb-1">2026 / 02</div>
                    <div className="grid grid-cols-7 gap-y-1 text-center">
                        {['S','M','T','W','T','F','S'].map((d, i) => (
                            <div key={i} className={`font-bold ${i === 0 ? 'text-red-500' : ''}`}>{d}</div>
                        ))}
                        {[...Array(31)].map((_, i) => (
                            <div key={i} className={`${i === 0 || i === 7 || i === 14 || i === 21 || i === 28 ? 'text-red-500' : 'text-gray-700'}`}>{i + 1}</div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-bold text-center text-gray-500 mb-1">2026 / 04</div>
                    <div className="grid grid-cols-7 gap-y-1 text-center">
                        {['S','M','T','W','T','F','S'].map((d, i) => (
                            <div key={i} className={`font-bold ${i === 0 ? 'text-red-500' : ''}`}>{d}</div>
                        ))}
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className={`${i === 4 || i === 11 || i === 18 || i === 25 ? 'text-red-500' : 'text-gray-700'}`}>{i + 1}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <SidebarLayout sidebarChildren={sidebarContent}>
            <Outlet />
        </SidebarLayout>
    );
};

export default ScheduleLayout;
