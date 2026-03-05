import React, { useState } from 'react';

const SchedulePage: React.FC = () => {
    const [viewType, setViewType] = useState('월간');

    const calendarDays = [
        // Feb 2026 (last days)
        { date: 1, month: 'Feb', day: 'Sun', isOtherMonth: true },
        { date: 2, month: 'Feb', day: 'Mon', isOtherMonth: true },
        { date: 3, month: 'Feb', day: 'Tue', isOtherMonth: true },
        { date: 4, month: 'Feb', day: 'Wed', isOtherMonth: true },
        { date: 5, month: 'Feb', day: 'Thu', isOtherMonth: true },
        { date: 6, month: 'Feb', day: 'Fri', isOtherMonth: true },
        { date: 7, month: 'Feb', day: 'Sat', isOtherMonth: true },
        // Mar 2026
        { date: 1, month: 'Mar', day: 'Sun', holiday: '삼일절', isHoliday: true },
        { date: 2, month: 'Mar', day: 'Mon', holiday: '대체공휴일', isHoliday: true },
        { date: 3, month: 'Mar', day: 'Tue' },
        { date: 4, month: 'Mar', day: 'Wed' },
        { date: 5, month: 'Mar', day: 'Thu', isToday: true },
        { date: 6, month: 'Mar', day: 'Fri' },
        { date: 7, month: 'Mar', day: 'Sat' },
        { date: 8, month: 'Mar', day: 'Sun', isHoliday: true },
        { date: 9, month: 'Mar', day: 'Mon' },
        { date: 10, month: 'Mar', day: 'Tue' },
        { date: 11, month: 'Mar', day: 'Wed' },
        { date: 12, month: 'Mar', day: 'Thu' },
        { date: 13, month: 'Mar', day: 'Fri' },
        { date: 14, month: 'Mar', day: 'Sat' },
        { date: 15, month: 'Mar', day: 'Sun', isHoliday: true },
        { date: 16, month: 'Mar', day: 'Mon' },
        { date: 17, month: 'Mar', day: 'Tue' },
        { date: 18, month: 'Mar', day: 'Wed' },
        { date: 19, month: 'Mar', day: 'Thu' },
        { date: 20, month: 'Mar', day: 'Fri' },
        { date: 21, month: 'Mar', day: 'Sat' },
        { date: 22, month: 'Mar', day: 'Sun', isHoliday: true },
        { date: 23, month: 'Mar', day: 'Mon' },
        { date: 24, month: 'Mar', day: 'Tue' },
        { date: 25, month: 'Mar', day: 'Wed' },
        { date: 26, month: 'Mar', day: 'Thu' },
        { date: 27, month: 'Mar', day: 'Fri' },
        { date: 28, month: 'Mar', day: 'Sat' },
        { date: 29, month: 'Mar', day: 'Sun', isHoliday: true },
        { date: 30, month: 'Mar', day: 'Mon' },
        { date: 31, month: 'Mar', day: 'Tue' },
        // Apr 2026 (first days)
        { date: 1, month: 'Apr', day: 'Wed', isOtherMonth: true },
        { date: 2, month: 'Apr', day: 'Thu', isOtherMonth: true },
        { date: 3, month: 'Apr', day: 'Fri', isOtherMonth: true },
        { date: 4, month: 'Apr', day: 'Sat', isOtherMonth: true },
        { date: 5, month: 'Apr', day: 'Sun', isOtherMonth: true },
        { date: 6, month: 'Apr', day: 'Mon', isOtherMonth: true },
        { date: 7, month: 'Apr', day: 'Tue', isOtherMonth: true },
        { date: 8, month: 'Apr', day: 'Wed', isOtherMonth: true },
        { date: 9, month: 'Apr', day: 'Thu', isOtherMonth: true },
        { date: 10, month: 'Apr', day: 'Fri', isOtherMonth: true },
        { date: 11, month: 'Apr', day: 'Sat', isOtherMonth: true },
    ];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header Row */}
            <div className="flex justify-between items-center p-2 mb-2">
                <h2 className="text-2xl font-bold">2026-03</h2>
                
                <div className="flex items-center gap-2">
                    <select className="border border-gray-300 rounded px-2 py-1 text-xs">
                        <option>[ 그룹선택 ]</option>
                    </select>
                    <button className="p-1 text-gray-400 hover:text-gray-600">⋮</button>
                    <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs flex items-center gap-1 font-medium hover:bg-gray-50">
                        📅 일정추가
                    </button>
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        <button 
                            onClick={() => setViewType('월간')}
                            className={`px-3 py-1 text-xs font-medium ${viewType === '월간' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                        >
                            월간
                        </button>
                        <button 
                            onClick={() => setViewType('주간')}
                            className={`px-3 py-1 text-xs font-medium border-l border-gray-300 ${viewType === '주간' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                        >
                            주간
                        </button>
                        <button 
                            onClick={() => setViewType('일간')}
                            className={`px-3 py-1 text-xs font-medium border-l border-gray-300 ${viewType === '일간' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                        >
                            일간
                        </button>
                    </div>
                    <button className="border border-gray-300 px-3 py-1 rounded text-xs font-medium hover:bg-gray-50">오늘</button>
                    <div className="flex gap-1">
                        <button className="border border-gray-300 p-1 rounded hover:bg-gray-50">⬅️</button>
                        <button className="border border-gray-300 p-1 rounded hover:bg-gray-50">➡️</button>
                    </div>
                </div>
            </div>

            {/* Calendar Grid Header */}
            <div className="grid grid-cols-7 border-t border-gray-200">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                    <div 
                        key={idx} 
                        className={`py-2 text-center text-[15px] font-bold border-r border-gray-200 last:border-r-0 ${idx === 0 ? 'text-red-500' : 'text-gray-700'}`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid Body */}
            <div className="grid grid-cols-7 border-t border-l border-gray-200 flex-grow">
                {calendarDays.map((day, idx) => (
                    <div 
                        key={idx} 
                        className={`h-32 border-r border-b border-gray-200 p-1 relative ${day.isOtherMonth ? 'bg-white' : ''} ${day.isToday ? 'bg-blue-50/50' : ''}`}
                    >
                        <div className="flex justify-between items-start">
                            {day.holiday && (
                                <span className="text-[11px] text-red-500 font-medium ml-1 mt-0.5 truncate max-w-[80%]">{day.holiday}</span>
                            )}
                            <span className={`text-[13px] font-medium absolute right-2 top-1 ${day.isHoliday || (idx % 7 === 0) ? 'text-red-500' : day.isOtherMonth ? 'text-gray-300' : 'text-gray-700'}`}>
                                {day.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchedulePage;
