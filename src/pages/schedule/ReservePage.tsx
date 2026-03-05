import React, { useState } from 'react';

interface Reservation {
    time: string;
    location: string;
    person: string;
    color: string;
}

const ReservePage: React.FC = () => {
    const [viewType, setViewType] = useState('월간');

    const reservationData: Record<number, Reservation[]> = {
        2: [
            { time: "9 AM", location: "5층 1회의실", person: "이현석 선임", color: "bg-[#96C98D]" },
            { time: "9:15 AM", location: "6층 홍보관 회의실", person: "김동근 리더", color: "bg-[#C47597]" },
            { time: "9:30 AM", location: "5층 2회의실", person: "이영진 수석", color: "bg-[#96C98D]" },
            { time: "10:30 AM", location: "7층 회의실", person: "최준혁 팀장", color: "bg-[#F7A01B]" },
            { time: "11 AM", location: "6층 홍보관 회의실", person: "민들레 책임", color: "bg-[#C47597]" },
            { time: "2 PM", location: "7층 회의실", person: "오지수 선임", color: "bg-[#F7A01B]" },
            { time: "2 PM", location: "6층 홍보관 회의실", person: "이영진 수석", color: "bg-[#C47597]" },
            { time: "3 PM", location: "6층 홍보관 회의실", person: "남유란 선임", color: "bg-[#C47597]" },
            { time: "4 PM", location: "6층 홍보관 회의실", person: "김윤상 책임", color: "bg-[#C47597]" },
        ],
        3: [
            { time: "9:30 AM", location: "5층 1회의실", person: "김태겸 소장", color: "bg-[#96C98D]" },
            { time: "10 AM", location: "5층 2회의실", person: "이해윤 리더", color: "bg-[#96C98D]" },
            { time: "10 AM", location: "8층 대회의실", person: "민들레 책임", color: "bg-[#7FB2E5]" },
            { time: "10 AM", location: "8층 소회의실", person: "유승숙 파트장", color: "bg-[#7FB2E5]" },
            { time: "11 AM", location: "7층 회의실", person: "홍인경 책임", color: "bg-[#F7A01B]" },
            { time: "1:30 PM", location: "8층 소회의실", person: "김현승 수석", color: "bg-[#7FB2E5]" },
            { time: "1:30 PM", location: "7층 회의실", person: "최준혁 팀장", color: "bg-[#F7A01B]" },
            { time: "2 PM", location: "6층 홍보관 회의실", person: "신지혜 선임", color: "bg-[#C47597]" },
            { time: "2:30 PM", location: "7층 회의실", person: "김윤상 책임", color: "bg-[#F7A01B]" },
            { time: "3 PM", location: "6층 홍보관 회의실", person: "김경란 팀장", color: "bg-[#C47597]" },
            { time: "3:30 PM", location: "8층 소회의실", person: "문지은 팀장", color: "bg-[#7FB2E5]" },
            { time: "4 PM", location: "7층 회의실", person: "최준혁 팀장", color: "bg-[#F7A01B]" },
        ],
        4: [
            { time: "9 AM", location: "8층 소회의실", person: "강지웅 선임", color: "bg-[#7FB2E5]" },
            { time: "10 AM", location: "5층 2회의실", person: "김태겸 소장", color: "bg-[#96C98D]" },
            { time: "10 AM", location: "8층 대회의실", person: "김귀동 본부장", color: "bg-[#7FB2E5]" },
            { time: "10 AM", location: "7층 회의실", person: "최서영", color: "bg-[#F7A01B]" },
            { time: "2 PM", location: "6층 홍보관 회의실", person: "최서영", color: "bg-[#C47597]" },
            { time: "2 PM", location: "8층 대회의실", person: "문지은 팀장", color: "bg-[#7FB2E5]" },
            { time: "3 PM", location: "8층 대회의실", person: "길희경 팀장", color: "bg-[#7FB2E5]" },
            { time: "4 PM", location: "5층 1회의실", person: "남유란 선임", color: "bg-[#96C98D]" },
        ],
        5: [
            { time: "11 AM", location: "7층 회의실", person: "최서영", color: "bg-[#F7A01B]" },
            { time: "11 AM", location: "8층 대회의실", person: "최준혁 팀장", color: "bg-[#7FB2E5]" },
            { time: "2 PM", location: "7층 회의실", person: "홍인경 책임", color: "bg-[#F7A01B]" },
            { time: "3 PM", location: "5층 1회의실", person: "남유란 선임", color: "bg-[#96C98D]" },
        ],
        9: [
            { time: "2 PM", location: "8층 대회의실", person: "문지은 팀장", color: "bg-[#7FB2E5]" },
            { time: "3 PM", location: "6층 홍보관 회의실", person: "박예린", color: "bg-[#C47597]" },
        ],
        10: [ { time: "11 AM", location: "7층 회의실", person: "김귀동 본부장", color: "bg-[#F7A01B]" } ],
        12: [ { time: "2 PM", location: "8층 대회의실", person: "길희경 팀장", color: "bg-[#7FB2E5]" } ],
        16: [ { time: "3 PM", location: "6층 홍보관 회의실", person: "박예린", color: "bg-[#C47597]" } ],
        17: [ { time: "11 AM", location: "7층 회의실", person: "김귀동 본부장", color: "bg-[#F7A01B]" } ],
        23: [ { time: "3 PM", location: "6층 홍보관 회의실", person: "박예린", color: "bg-[#C47597]" } ],
        24: [ { time: "11 AM", location: "7층 회의실", person: "김귀동 본부장", color: "bg-[#F7A01B]" } ],
        26: [ { time: "2 PM", location: "8층 대회의실", person: "길희경 팀장", color: "bg-[#7FB2E5]" } ],
        30: [ { time: "3 PM", location: "6층 홍보관 회의실", person: "박예린", color: "bg-[#C47597]" } ],
        31: [ { time: "11 AM", location: "7층 회의실", person: "김귀동 본부장", color: "bg-[#F7A01B]" } ],
    };

    const calendarDays = [
        ...Array(7).fill({ date: 0, isOtherMonth: true }), // Padding for Feb
        ...Array.from({ length: 31 }, (_, i) => ({
            date: i + 1,
            reservations: reservationData[i + 1] || []
        })),
        ...Array(4).fill({ date: 0, isOtherMonth: true }) // Padding for Apr
    ];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header Row */}
            <div className="flex justify-between items-center p-2 mb-2">
                <h2 className="text-2xl font-bold text-gray-800">2026-03</h2>
                
                <div className="flex items-center gap-2">
                    <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs flex items-center gap-1 font-medium hover:bg-gray-50">
                        ➕ 신규예약
                    </button>
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        <button onClick={() => setViewType('월간')} className={`px-3 py-1 text-xs font-medium ${viewType === '월간' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}>월간</button>
                        <button onClick={() => setViewType('주간')} className={`px-3 py-1 text-xs font-medium border-l border-gray-300 ${viewType === '주간' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}>주간</button>
                        <button onClick={() => setViewType('일간')} className={`px-3 py-1 text-xs font-medium border-l border-gray-300 ${viewType === '일간' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}>일간</button>
                    </div>
                    <button className="border border-gray-300 px-3 py-1 rounded text-xs font-medium hover:bg-gray-50">오늘</button>
                    <div className="flex gap-1">
                        <button className="border border-gray-300 p-1 rounded hover:bg-gray-50">⬅️</button>
                        <button className="border border-gray-300 p-1 rounded hover:bg-gray-50">➡️</button>
                    </div>
                </div>
            </div>

            {/* Grid Header */}
            <div className="grid grid-cols-7 border-t border-gray-200">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                    <div key={idx} className={`py-1.5 text-center text-[15px] font-bold border-r border-gray-200 last:border-r-0 ${idx === 0 ? 'text-red-500' : 'text-gray-700'}`}>
                        {day}
                    </div>
                ))}
            </div>

            {/* Grid Body */}
            <div className="grid grid-cols-7 border-t border-l border-gray-200 flex-grow overflow-y-auto">
                {calendarDays.map((day, idx) => (
                    <div key={idx} className={`min-h-[140px] border-r border-b border-gray-200 p-1 relative ${day.isOtherMonth ? 'bg-white' : ''} ${day.date === 5 ? 'bg-blue-50/30' : ''}`}>
                        {day.date !== 0 && (
                            <>
                                <div className="flex justify-end pr-1">
                                    <span className={`text-[12px] font-medium ${idx % 7 === 0 ? 'text-red-500' : 'text-gray-400'}`}>
                                        {day.date}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-0.5 mt-1">
                                    {(day.reservations || []).map((res: any, rIdx: number) => (
                                        <div key={rIdx} className={`${res.color} text-gray-900 text-[10px] p-1 rounded-sm leading-tight flex flex-col shadow-sm border border-black/5`}>
                                            <div className="font-bold flex justify-between items-center">
                                                <span>{res.time} {res.location}</span>
                                            </div>
                                            <div className="truncate opacity-90">{res.person}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReservePage;
