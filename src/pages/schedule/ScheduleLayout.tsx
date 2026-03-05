import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const ScheduleLayout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const sidebarContent = (
        <div className="flex flex-col gap-6">
            {/* Clock */}
            <div className="flex flex-col items-center justify-center border-b pb-6 mb-4">
                <div className="relative w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center">
                    <div className="absolute w-1 h-8 bg-gray-800 rounded-full top-4 transform rotate-45 origin-bottom"></div>
                    <div className="absolute w-1.5 h-6 bg-gray-600 rounded-full top-6 transform -rotate-45 origin-bottom"></div>
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
