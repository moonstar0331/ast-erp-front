import React from 'react';

const AttendanceMonthlyPage: React.FC = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    
    // Day of week logic for March 2026 (1st is Sunday)
    const getDayColor = (day: number) => {
        const date = new Date(2026, 2, day); // March is 2
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0) return 'text-red-500'; // Sunday
        if (dayOfWeek === 6) return 'text-blue-500'; // Saturday
        return 'text-gray-800';
    };

    const categories = [
        { name: '출근', color: 'bg-black' },
        { name: '출근원격', color: 'bg-yellow-400' },
        { name: '퇴근', color: 'bg-gray-400' },
        { name: '지각', color: 'bg-purple-600' },
        { name: '연장', color: 'bg-green-600' },
        { name: '외출', color: 'bg-blue-800' },
        { name: '복귀', color: 'bg-amber-900' },
        { name: '휴가', color: 'bg-rose-300' },
        { name: '기타', color: 'bg-gray-300' },
    ];

    return (
        <div className="space-y-4">
            {/* Filter Bar */}
            <div className="flex justify-between items-center pb-2">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">[ 2026-03 ]</h2>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none border rounded-md px-3 py-1 text-sm bg-white pr-8 outline-none text-gray-700">
                                <option>[ 부서 ]</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                        </div>
                        <label className="flex items-center gap-1 cursor-pointer text-sm text-gray-700">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <span>퇴사자</span>
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer text-sm text-gray-700">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <span>시간</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex border rounded-md overflow-hidden bg-white">
                        <button className="px-3 py-1 text-sm font-medium bg-blue-500 text-white">월간</button>
                        <button className="px-3 py-1 text-sm font-medium text-gray-600 border-l hover:bg-gray-50">주간</button>
                    </div>
                    <div className="flex border rounded-md overflow-hidden ml-2">
                        <button className="px-3 py-1.5 hover:bg-gray-50 bg-white text-blue-500">◀</button>
                        <button className="px-3 py-1.5 hover:bg-gray-50 border-l bg-white text-blue-500">▶</button>
                    </div>
                </div>
            </div>

            {/* Monthly Table Section */}
            <div className="border rounded-sm overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[1200px]">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-800 border-r border-gray-200 text-center sticky left-0 bg-gray-50 z-10 w-24">이름</th>
                            {days.map(day => (
                                <th 
                                    key={day} 
                                    className={`px-1 py-2 text-[12px] font-bold border-r border-gray-200 text-center w-8 ${getDayColor(day)} ${day === 5 ? 'bg-blue-100' : ''}`}
                                >
                                    {day}
                                </th>
                            ))}
                            {categories.map((cat, idx) => (
                                <th key={idx} className="px-1 py-1 text-[10px] font-bold text-gray-800 border-r border-gray-200 text-center w-12 bg-gray-100">
                                    <div className={`w-full h-3 mb-1 ${cat.color}`}></div>
                                    {cat.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat, rowIdx) => (
                            <tr key={rowIdx} className="border-b border-gray-200 hover:bg-gray-50 text-[11px]">
                                <td className="px-4 py-2 font-bold text-gray-700 border-r border-gray-200 sticky left-0 bg-white z-10 text-center">{cat.name}</td>
                                {days.map(day => (
                                    <td key={day} className={`px-1 py-2 border-r border-gray-200 text-center ${day === 5 ? 'bg-blue-50' : ''}`}>0</td>
                                ))}
                                {categories.map((_, colIdx) => (
                                    <td key={colIdx} className="px-1 py-2 border-r border-gray-200 text-center bg-gray-50">
                                        {rowIdx === colIdx ? '0' : ''}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceMonthlyPage;
