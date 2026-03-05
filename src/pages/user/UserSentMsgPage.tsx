import React, { useState } from 'react';

interface SentMessage {
    id: number;
    sender: string;
    receiver: string;
    title: string;
    attachmentSize?: string;
    attachmentCount?: number;
    date: string;
    isFavorite: boolean;
}

const UserSentMsgPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const sentMessages: SentMessage[] = [
        { id: 1, sender: '김문성', receiver: '안태욱 수석', title: '김문성 + 연말정산', attachmentSize: '1.6 M', attachmentCount: 5, date: '2026-01-19', isFavorite: false },
        { id: 2, sender: '김문성', receiver: '민들레 책임', title: '코어 엔지니어링팀 + 김문성 + 2026년 설날 선물', date: '2026-01-16', isFavorite: false },
        { id: 3, sender: '김문성', receiver: '민들레 책임', title: '추석 선물세트 주소 공유드립니다.', date: '2025-09-08', isFavorite: false },
        { id: 4, sender: '김문성', receiver: '민들레 책임', title: 'DX사업본부 김문성 2025년 설날 선물 주소입니다.', date: '2025-01-09', isFavorite: false },
        { id: 5, sender: '김문성', receiver: '김채갑 이사', title: 'Re: 국가연구자번호 발급 요청', date: '2025-01-08', isFavorite: false },
        { id: 6, sender: '김문성', receiver: '김현승 수석', title: 'Re: 한컴 독스 변경된 패스워드 공유드립니다.', date: '2025-01-02', isFavorite: false },
    ];

    return (
        <div className="flex flex-col gap-2">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1 border border-gray-300 rounded text-[12px] hover:bg-gray-50 bg-white">
                        📝 메시지쓰기
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="검색" 
                            className="w-48 border border-gray-300 rounded px-3 py-1 text-[12px] outline-none focus:border-blue-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-600 border-l pl-2 ml-2">
                        <span>1-6 / 6</span>
                        <select className="border border-gray-300 rounded px-1 py-0.5 text-[11px]">
                            <option>20 줄</option>
                        </select>
                        <div className="flex gap-1 ml-1">
                            <button className="p-1 border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-400">
                                <span className="text-[10px]">◀</span>
                            </button>
                            <button className="p-1 border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-400">
                                <span className="text-[10px]">▶</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sent Message Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white border-b border-gray-200">
                            <th className="w-8 px-4 py-2">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                            </th>
                            <th className="w-8 px-0 py-2">
                                <span className="text-gray-400">★</span>
                            </th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[120px]">발신</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[180px]">수신</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700">제목</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[100px] text-right whitespace-nowrap">첨부크기 <span className="text-[10px]">▶</span></th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[100px] text-right whitespace-nowrap">첨부갯수</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[100px] text-right whitespace-nowrap">날짜 <span className="text-gray-400">⇅</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sentMessages.map((msg) => (
                            <tr key={msg.id} className="border-b border-gray-50 hover:bg-gray-50 group cursor-pointer">
                                <td className="px-4 py-2">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                </td>
                                <td className="px-0 py-2">
                                    <span className={`text-lg ${msg.isFavorite ? 'text-yellow-400' : 'text-gray-300 group-hover:text-gray-400'}`}>☆</span>
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-700 font-medium">
                                    {msg.sender}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-700">
                                    {msg.receiver}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-800 truncate max-w-[500px]">
                                    {msg.title}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-500 text-right">
                                    {msg.attachmentSize || ''}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-500 text-right">
                                    {msg.attachmentCount && (
                                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gray-500 text-white rounded text-[11px]">
                                            📎 {msg.attachmentCount}
                                        </span>
                                    )}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-500 text-right">
                                    {msg.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserSentMsgPage;
