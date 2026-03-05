import React from 'react';

const AttendancePage: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex justify-between items-start pb-4">
                <div className="text-3xl font-bold">2026 / 03</div>
                <div className="flex items-center gap-1">
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 flex items-center gap-1 text-gray-700 bg-white">
                        <span>☰</span> 목록
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 flex items-center gap-1 text-gray-700 bg-white ml-2">
                        <span>💼</span> 휴가일수조회
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 flex items-center gap-1 text-gray-700 bg-white">
                        <span>✈️</span> 휴가신청
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 flex items-center gap-1 text-gray-700 bg-white">
                        <span>🕒</span> 근태등록
                    </button>
                    <div className="flex ml-2 border border-gray-300 rounded-md overflow-hidden">
                        <button className="px-3 py-1.5 hover:bg-gray-50 bg-white text-blue-500">◀</button>
                        <button className="px-3 py-1.5 hover:bg-gray-50 border-l border-gray-300 bg-white text-blue-500">▶</button>
                    </div>
                </div>
            </div>

            {/* Weekly Status Section */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <span className="text-gray-700">ℹ️</span> 주간 근무현황
                        </h3>
                        <div className="flex items-center gap-1 text-sm">
                            <button className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-400 bg-white">📅</button>
                            <div className="flex items-center border rounded-md bg-white">
                                <button className="px-2 py-1 text-gray-400 border-r">«</button>
                                <span className="px-4 py-1 text-gray-700">2026-03-01 ~ 2026-03-07</span>
                                <button className="px-2 py-1 text-gray-400 border-l">»</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <div className="flex justify-between text-[11px] text-gray-400 px-1 relative">
                            <span className="absolute left-[15.3%]">8</span>
                            <span className="absolute left-[30.7%]">16</span>
                            <span className="absolute left-[46.1%]">24</span>
                            <span className="absolute left-[61.5%]">32</span>
                            <span className="absolute left-[76.9%]">40</span>
                            <span className="absolute left-[100%] -translate-x-full">52</span>
                            <div className="h-6"></div>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-sm overflow-hidden flex relative border-b border-gray-200">
                             <div className="absolute left-[15.3%] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                             <div className="absolute left-[30.7%] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                             <div className="absolute left-[46.1%] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                             <div className="absolute left-[61.5%] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                             <div className="absolute left-[76.9%] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                             <div className="w-[30%] bg-blue-500 h-full relative z-10"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 border rounded-sm divide-x border-gray-200 text-center bg-white overflow-hidden shadow-sm">
                        <div className="p-4">
                            <div className="text-[13px] font-bold text-gray-800 mb-2">근무일</div>
                            <div className="text-[15px] font-medium text-gray-600">3</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[13px] font-bold text-gray-800 mb-2">근무시간</div>
                            <div className="text-[15px] font-medium text-gray-600">16시간 00분</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[13px] font-bold text-gray-800 mb-2">지각</div>
                            <div className="text-[15px] font-medium text-gray-600">0</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[13px] font-bold text-gray-800 mb-2">퇴근미체크</div>
                            <div className="text-[15px] font-medium text-gray-600">1</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[13px] font-bold text-gray-800 mb-2">연장근무</div>
                            <div className="text-[15px] font-medium text-gray-600">0</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[13px] font-bold text-gray-800 mb-2">휴가</div>
                            <div className="text-[15px] font-medium text-gray-600">0</div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[400px] border border-gray-200 rounded-sm overflow-hidden grid grid-cols-7 divide-x divide-gray-200 bg-white shadow-sm">
                    {[
                        { date: '01(일)', status: '휴일', color: 'text-red-500' },
                        { date: '02(월)', status: '휴일', color: 'text-gray-600' },
                        { date: '03(화)', status: '08시간 00분', color: 'text-gray-600' },
                        { date: '04(수)', status: '08시간 00분', color: 'text-gray-600' },
                        { date: '05(목)', status: '퇴근미체크', color: 'text-gray-600', active: true },
                        { date: '06(금)', status: '근무예정', color: 'text-gray-600' },
                        { date: '07(토)', status: '휴일', color: 'text-blue-500' },
                    ].map((item, idx) => (
                        <div key={idx} className={`flex flex-col ${item.active ? 'bg-yellow-50' : ''}`}>
                            <div className={`p-2 border-b border-gray-200 text-center text-[12px] font-bold ${item.color} ${item.active ? 'bg-yellow-100' : 'bg-gray-50'}`}>
                                {item.date}
                            </div>
                            <div className="p-3 flex flex-col items-center justify-center flex-1 text-[11px] font-medium text-center">
                                {item.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar Section */}
            <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm bg-white">
                <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200 divide-x divide-gray-200 font-bold text-center h-10 items-center">
                    <div className="text-red-500 text-sm">일</div>
                    <div className="text-gray-700 text-sm">월</div>
                    <div className="text-gray-700 text-sm">화</div>
                    <div className="text-gray-700 text-sm">수</div>
                    <div className="text-gray-700 text-sm">목</div>
                    <div className="text-gray-700 text-sm">금</div>
                    <div className="text-blue-500 text-sm">토</div>
                </div>
                <div className="grid grid-cols-7 divide-x divide-y divide-gray-200">
                    {/* Simplified calendar grid rendering for March 2026 */}
                    <div className="min-h-[140px] p-2 bg-yellow-50 relative">
                        <div className="flex justify-between">
                            <span className="text-gray-400 text-xs font-bold">삼일절</span>
                            <span className="text-red-500 text-xs font-bold">1</span>
                        </div>
                    </div>
                    <div className="min-h-[140px] p-2 bg-yellow-50 relative">
                        <div className="flex justify-between">
                            <span className="text-gray-400 text-xs font-bold">대체공휴일</span>
                            <span className="text-red-400 text-xs font-bold">2</span>
                        </div>
                    </div>
                    <div className="min-h-[140px] p-2 bg-yellow-50 relative">
                        <div className="flex justify-end mb-2">
                            <span className="text-gray-700 text-xs font-bold">3</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[11px] text-gray-800 font-medium">08:57 출근 [ 연동 ]</div>
                            <div className="text-[11px] text-gray-800 font-medium">17:59 퇴근 [ 연동 ]</div>
                        </div>
                    </div>
                    <div className="min-h-[140px] p-2 bg-yellow-50 relative border-2 border-blue-400 z-10">
                        <div className="flex justify-end mb-2">
                            <span className="text-gray-700 text-xs font-bold">4</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[11px] text-gray-800 font-medium">09:05 출근 [ 연동 ]</div>
                            <div className="text-[11px] text-gray-800 font-medium">18:05 퇴근 [ 연동 ]</div>
                        </div>
                    </div>
                    <div className="min-h-[140px] p-2 bg-yellow-50 relative">
                        <div className="flex justify-end mb-2">
                            <span className="text-gray-700 text-xs font-bold">5</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[11px] text-gray-800 font-medium">08:35 출근 [ 연동 ]</div>
                        </div>
                    </div>
                    <div className="min-h-[140px] p-2 relative">
                        <div className="flex justify-end mb-2">
                            <span className="text-gray-400 text-xs font-bold">6</span>
                        </div>
                    </div>
                    <div className="min-h-[140px] p-2 relative">
                        <div className="flex justify-end mb-2">
                            <span className="text-blue-300 text-xs font-bold">7</span>
                        </div>
                    </div>
                    
                    {Array.from({ length: 28 }).map((_, i) => (
                        <div key={i} className="min-h-[140px] p-2 relative">
                            <div className="flex justify-end mb-2">
                                <span className={`text-xs font-bold ${[1, 8, 15, 22].includes(i) ? 'text-red-300' : [7, 14, 21, 28].includes(i) ? 'text-blue-300' : 'text-gray-300'}`}>
                                    {i + 8}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AttendancePage;
