import React, { useState } from 'react';

interface Notice {
    id: number;
    sender: string;
    category: string;
    message: string;
    date: string;
    isRead: boolean;
}

const UserNoticePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const notices: Notice[] = [
        { id: 1, sender: '김이안 선임', category: '업무관리', message: '7/8층 양희수(23일) ↔ 김이안(31일)', date: '1 일', isRead: false },
        { id: 2, sender: '김이안 선임', category: '업무관리', message: '[2026년] 3월 당직 [내용] [업무공유]', date: '1 일', isRead: false },
        { id: 3, sender: '권순찬 선임', category: '전자결재', message: '현장 상황 변동으로 인하여 ~ 3월31일 출장 연장 되었습니다.', date: '1 일', isRead: false },
        { id: 4, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - [출장기안서]LX 판토스 시스템 구축 사업 관리 상주 件', date: '1 일', isRead: false },
        { id: 5, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - [사후 결제 요청] Digital Reality Labs-Product파트 휴일근무계획서', date: '1 일', isRead: false },
        { id: 6, sender: '이동우 대표이사', category: '업무보고', message: '배포문서가 도착했습니다. - W09_디지털리얼리티연구소_주간업무보고', date: '5 일', isRead: true },
        { id: 7, sender: '이동우 대표이사', category: '업무보고', message: '배포문서가 도착했습니다. - W08/W09_DX사업본부_주간업무보고', date: '5 일', isRead: true },
        { id: 8, sender: '오하진', category: '업무관리', message: '7/8층 오하진(4일) ↔ 유승숙(6일)', date: '6 일', isRead: true },
        { id: 9, sender: '백예찬 선임', category: '업무관리', message: '[2026년] 3월 당직 [제목] [내용] [업무공유]', date: '6 일', isRead: true },
        { id: 10, sender: '문대식 수석', category: '전자결재', message: '현장대응을 위해 LX 긴급 요청으로 02.27(금) 연장 보고드립니다.', date: '6 일', isRead: true },
        { id: 11, sender: '이웅희 본부장', category: '전자결재', message: '배포문서가 도착했습니다. - [공장인허가 민원행정업무지원 서비스 유지관리] 법령 개정에 따른 기반비용 산출 금액 수정을 위한 출장 件', date: '8 일', isRead: true },
        { id: 12, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - [광명시 자가통신망 유지관리] 자가통신망 플랫폼 운영서버 소스 수정 및 반영 件', date: '8 일', isRead: true },
        { id: 13, sender: '권순찬 선임', category: '전자결재', message: '출장 일정이 연장되어 관련사항으로 첨부드립니다. 1. 변경 일정 : 2026 . 02-23(월) ~ 02.27(금) 2. 출장자 : 권순찬 선임 3. 출장 연장 사유 : 현장 상황 변동으로 추가 대응이 필요하여 부득이하게 출장 연장을 요청드립니다.', date: '9 일', isRead: true },
        { id: 14, sender: '김동호', category: '전자결재', message: '내용 정정드립니다. 2월 22일(월) -> 2월 23일(월) 입니다.', date: '2026-02-23', isRead: true },
        { id: 15, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - [LG CNS] LX Pantos W-Craft 시스템 구축 및 운영 사업 상주/출장 件', date: '2026-02-22', isRead: true },
        { id: 16, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - [광명시 자가통신망 유지관리] 자가통신망 플랫폼 운영서버 소스 수정 및 반영 件', date: '2026-02-20', isRead: true },
        { id: 17, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - 코어엔지니어링팀 휴일근무계획서', date: '2026-02-20', isRead: true },
        { id: 18, sender: '이동우 대표이사', category: '업무보고', message: '배포문서가 도착했습니다. - W07_디지털리얼리티연구소_주간업무보고', date: '2026-02-19', isRead: true },
        { id: 19, sender: '이동우 대표이사', category: '업무보고', message: '배포문서가 도착했습니다. - W07_DX사업본부_주간업무보고', date: '2026-02-14', isRead: true },
        { id: 20, sender: '싸비/Sabby CTO', category: '전자결재', message: '배포문서가 도착했습니다. - 비주얼엔지니어링팀 휴일근무계획서', date: '2026-02-13', isRead: true },
    ];

    return (
        <div className="flex flex-col gap-2">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 ml-4" />
                </div>
                <div className="flex items-center gap-2">
                    <select className="border border-gray-300 rounded px-2 py-1 text-[12px] outline-none focus:border-blue-400">
                        <option>[ 분류 ]</option>
                    </select>
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
                        <span>1-20 / 35</span>
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

            {/* Notice Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white border-b border-gray-200">
                            <th className="w-10 px-4 py-2"></th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[150px]">발신</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[100px]">분류</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700">메시지</th>
                            <th className="px-4 py-2 text-[13px] font-bold text-gray-700 w-[100px] text-right">날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((notice) => (
                            <tr key={notice.id} className="border-b border-gray-50 hover:bg-gray-50 group cursor-pointer">
                                <td className="px-4 py-2">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                </td>
                                <td className={`px-4 py-2 text-[13px] ${notice.isRead ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                                    {notice.sender}
                                </td>
                                <td className={`px-4 py-2 text-[13px] ${notice.isRead ? 'text-gray-600' : 'text-gray-900'}`}>
                                    {notice.category}
                                </td>
                                <td className={`px-4 py-2 text-[13px] truncate max-w-[800px] ${notice.isRead ? 'text-gray-500' : 'text-gray-800'}`}>
                                    {notice.message}
                                </td>
                                <td className="px-4 py-2 text-[13px] text-gray-500 text-right">
                                    {notice.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserNoticePage;
