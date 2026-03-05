import React, { useState } from 'react';

interface Message {
    id: number;
    sender: string;
    receiver: string;
    receiverBadge?: string;
    title: string;
    attachmentSize?: string;
    attachmentCount?: number;
    date: string;
    isFavorite: boolean;
    isRead: boolean;
}

const UserMsgPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const messages: Message[] = [
        { id: 1, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '76', title: '2월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2026-02-10', isFavorite: false, isRead: true },
        { id: 2, sender: '김현승 수석', receiver: '김문성', title: '주 52시간 초과 건 안내', date: '2026-02-03', isFavorite: false, isRead: true },
        { id: 3, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '71', title: '1월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2026-01-12', isFavorite: false, isRead: true },
        { id: 4, sender: '김유래', receiver: '싸비/Sabby CTO', receiverBadge: '27', title: 'Fw: [시범구역] 디지털 트윈 시범구역 조성사업 「AI윤리교육」 사후 설문조사 참여 요청 건', date: '2025-12-12', isFavorite: false, isRead: true },
        { id: 5, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '74', title: '12월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2025-12-10', isFavorite: false, isRead: true },
        { id: 6, sender: '김현승 수석', receiver: '이해윤 리더', receiverBadge: '28', title: 'Re: 5층 탕비실 싱크대 막힘, 공사 안내', date: '2025-12-03', isFavorite: false, isRead: true },
        { id: 7, sender: '김현승 수석', receiver: '이해윤 리더', receiverBadge: '28', title: '5층 탕비실 싱크대 막힘, 공사 안내', date: '2025-12-03', isFavorite: false, isRead: true },
        { id: 8, sender: '허은희 책임', receiver: '김동영', receiverBadge: '4', title: '한국정보통신공사협회 가입 및 경력수첩 발급 요청', attachmentSize: '9.8 M', attachmentCount: 1, date: '2025-11-26', isFavorite: false, isRead: true },
        { id: 9, sender: '김유래', receiver: '싸비/Sabby CTO', receiverBadge: '27', title: 'Re: [시범구역] 디지털 트윈 시범구역 조성사업 「AI윤리교육」 진행 안내의 건', attachmentSize: '1.6 M', attachmentCount: 2, date: '2025-11-13', isFavorite: false, isRead: true },
        { id: 10, sender: '김유래', receiver: '싸비/Sabby CTO', receiverBadge: '27', title: '[시범구역] 디지털 트윈 시범구역 조성사업 「AI윤리교육」 진행 안내의 건', date: '2025-11-07', isFavorite: false, isRead: true },
        { id: 11, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '70', title: '11월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2025-11-05', isFavorite: false, isRead: true },
        { id: 12, sender: '김현승 수석', receiver: '김동근 리더', receiverBadge: '48', title: '5층 및 6층 당직 통합 관련 안내', date: '2025-10-23', isFavorite: false, isRead: true },
        { id: 13, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '74', title: '10월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2025-10-10', isFavorite: false, isRead: true },
        { id: 14, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '74', title: 'KOSA 소프트웨어기술자 경력관리시스템 가입 및 경력 갱신 요청 (~9/26(금) 까지)', attachmentSize: '2.2 M', attachmentCount: 2, date: '2025-09-17', isFavorite: false, isRead: true },
        { id: 15, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '76', title: '9월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2025-09-10', isFavorite: false, isRead: true },
        { id: 16, sender: '민들레 책임', receiver: '이동우 대표이사', receiverBadge: '168', title: '추석선물 받으실 주소 보내주세요.', date: '2025-09-05', isFavorite: false, isRead: true },
        { id: 17, sender: '김현승 수석', receiver: '김문성', title: '백신 설치 요청', date: '2025-08-11', isFavorite: false, isRead: true },
        { id: 18, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '76', title: '8월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2025-08-11', isFavorite: false, isRead: true },
        { id: 19, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '74', title: '7월 출장비 및 기타비용 제출 件', attachmentSize: '191.3 K', attachmentCount: 2, date: '2025-07-10', isFavorite: false, isRead: true },
        { id: 20, sender: '신지혜 선임', receiver: '고건 리더', receiverBadge: '74', title: '7월 사무용품 주문 件', date: '2025-07-01', isFavorite: false, isRead: true },
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
                        <span>1-20 / 39</span>
                        <select className="border border-gray-300 rounded px-1 py-0.5 text-[11px]">
                            <option>20 줄</option>
                        </select>
                        <div className="flex gap-1 ml-1">
                            <button className="p-1 border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-400">
                                <span className="text-[10px]">◀</span>
                            </button>
                            <button className="p-1 border border-blue-400 rounded bg-white hover:bg-gray-50 text-blue-500">
                                <span className="text-[10px]">▶</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Message Table */}
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
                        {messages.map((msg) => (
                            <tr key={msg.id} className="border-b border-gray-50 hover:bg-gray-50 group cursor-pointer">
                                <td className="px-4 py-2">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                </td>
                                <td className="px-0 py-2">
                                    <span className={`text-lg ${msg.isFavorite ? 'text-yellow-400' : 'text-gray-300 group-hover:text-gray-400'}`}>☆</span>
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-700">
                                    {msg.sender}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-700">
                                    <div className="flex items-center gap-1.5">
                                        <span>{msg.receiver}</span>
                                        {msg.receiverBadge && (
                                            <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-500 text-white text-[10px] rounded-full">
                                                {msg.receiverBadge}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-800 truncate max-w-[500px]">
                                    {msg.title}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-500 text-right">
                                    {msg.attachmentSize || ''}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-500 text-right">
                                    {msg.attachmentCount && (
                                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gray-100 rounded text-[11px]">
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

export default UserMsgPage;
