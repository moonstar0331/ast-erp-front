import React, { useState } from 'react';
import SidebarLayout from "@/components/SidebarLayout.tsx";

interface ApprovalDoc {
    id: number;
    title: string;
    docNumber: string;
    requestDate: string;
    author: string;
    authorTitle: string;
    writeDate: string;
    commentCount?: number;
    attachmentCount?: number;
    isStarred?: boolean;
}

const ApprovalPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('대기');
    
    const tabs = [
        { name: '대기', count: null },
        { name: '진행', count: null },
        { name: '승인', count: null },
        { name: '기각', count: null },
        { name: '합의', count: null },
        { name: '시행', count: null },
        { name: '배포', count: 171 },
        { name: '회람', count: null },
        { name: '상신', count: null },
    ];

    const documents: ApprovalDoc[] = [
        { id: 1, title: '휴일근무계획서 - [사후 결제 요청] Digital Reality Labs-Product파트 휴일근무계획서', docNumber: '주간생산계획서-2026-03-00002', requestDate: '2026-03-03', author: '김호태', authorTitle: '수석', writeDate: '1 일', isStarred: false },
        { id: 2, title: '출장기안서 - [출장기안서]LX 판토스 시스템 구축 사업 관리 상주 件', docNumber: '출장기안서-2026-03-00001', requestDate: '2026-03-03', author: '김호태', authorTitle: '수석', writeDate: '1 일', isStarred: false },
        { id: 3, title: '출장기안서 - [공장인허가 민원행정업무지원 서비스 유지관리] 법령 개정에 따른 기반비용 산출 금액 수정을 위한 출장 件', docNumber: '출장기안서-2026-02-00023', requestDate: '2026-02-24', author: '문대식', authorTitle: '수석', writeDate: '8 일', commentCount: 1, isStarred: false },
        { id: 4, title: '출장기안서 - [광명시 자가통신망 유지관리] 자가통신망 플랫폼 운영서버 소스 수정 및 반영 件', docNumber: '출장기안서-2026-02-00022', requestDate: '2026-02-24', author: '김동호', authorTitle: '', writeDate: '8 일', isStarred: false },
        { id: 5, title: '출장기안서 - [LG CNS] LX Pantos W-Craft 시스템 구축 및 운영 사업 상주/출장 件', docNumber: '출장기안서-2026-02-00020', requestDate: '2026-02-22', author: '권순찬', authorTitle: '선임', writeDate: '2026-02-22', commentCount: 2, isStarred: false },
        { id: 6, title: '휴일근무계획서 - 코언엔지니어링팀 휴일근무계획서', docNumber: '주간생산계획서-2026-02-00016', requestDate: '2026-02-20', author: '이해윤', authorTitle: '리더', writeDate: '2026-02-20', isStarred: false },
        { id: 7, title: '출장기안서 - [광명시 자가통신망 유지관리] 자가통신망 플랫폼 운영서버 소스 수정 및 반영 件', docNumber: '출장기안서-2026-02-00019', requestDate: '2026-02-19', author: '김동호', authorTitle: '', writeDate: '2026-02-19', commentCount: 2, isStarred: false },
        { id: 8, title: '휴일근무계획서 - 비주얼엔지니어링팀 휴일근무계획서', docNumber: '주간생산계획서-2026-02-00010', requestDate: '2026-02-12', author: '김동근', authorTitle: '리더', writeDate: '2026-02-12', isStarred: false },
        { id: 9, title: '출장기안서 - [2024년 공장인허가 사전진단 서비스 구축] LX맵 재발행 및 광명시 기능 수정을 위한 출장 件', docNumber: '출장기안서-2026-02-00012', requestDate: '2026-02-09', author: '문대식', authorTitle: '수석', writeDate: '2026-02-09', isStarred: false },
        { id: 10, title: '휴일근무계획서 - 코언엔지니어링팀 휴일근무계획서', docNumber: '주간생산계획서-2026-02-00008', requestDate: '2026-02-09', author: '이해윤', authorTitle: '리더', writeDate: '2026-02-09', commentCount: 2, isStarred: false },
        { id: 11, title: '휴일근무계획서 - 비주얼엔지니어링팀 휴일근무계획서', docNumber: '주간생산계획서-2026-02-00007', requestDate: '2026-02-06', author: '김동근', authorTitle: '리더', writeDate: '2026-02-06', isStarred: false },
        { id: 12, title: '출장기안서 - [LG CNS] LX Pantos W-Craft 시스템 구축 및 운영 사업 상주/출장 件', docNumber: '출장기안서-2026-02-00007', requestDate: '2026-02-05', author: '김동근', authorTitle: '리더', writeDate: '2026-02-05', isStarred: false },
        { id: 13, title: '출장기안서 - [공장인허가 민원행정업무지원 서비스 유지관리] 제안 적격성평가 참석을 위한 출장 件', docNumber: '출장기안서-2026-02-00004', requestDate: '2026-02-03', author: '이정주', authorTitle: '수석', writeDate: '2026-02-03', isStarred: false },
        { id: 14, title: '출장기안서 - [2024년 공장인허가 사전진단 서비스 구축] 화성특례시 행정개편 대응 LX맵 재발행을 위한 출장 件', docNumber: '출장기안서-2026-02-00002', requestDate: '2026-02-02', author: '문대식', authorTitle: '수석', writeDate: '2026-02-02', isStarred: false },
        { id: 15, title: '휴일근무계획서 - 코언엔지니어링팀 휴일근무계획서', docNumber: '주간생산계획서-2026-01-00018', requestDate: '2026-01-31', author: '이해윤', authorTitle: '리더', writeDate: '2026-01-31', isStarred: false },
        { id: 16, title: '출장기안서 - [광명시 자가통신망 유지관리] 광명시 스마트도시과 담당자 요구사항 협의를 위한 출장 件', docNumber: '출장기안서-2026-01-00027', requestDate: '2026-01-26', author: '이정주', authorTitle: '수석', writeDate: '2026-01-26', isStarred: false },
        { id: 17, title: '휴일근무계획서 - 코언엔지니어링팀 휴일근무계획서', docNumber: '주간생산계획서-2026-01-00010', requestDate: '2026-01-22', author: '이해윤', authorTitle: '리더', writeDate: '2026-01-22', isStarred: false },
        { id: 18, title: '출장기안서 - [LG CNS] LX Pantos W-Craft 시스템 구축 및 운영 사업 상주/출장 件', docNumber: '출장기안서-2026-01-00022', requestDate: '2026-01-22', author: '이해윤', authorTitle: '리더', writeDate: '2026-01-22', commentCount: 3, isStarred: false },
        { id: 19, title: '품의서[지출] - [품의서] 정보통신공사협회 회원 가입 수수료 정산 (3인, 사후)', docNumber: '품의서[지출]2026-01-00001', requestDate: '2026-01-06', author: '허은희', authorTitle: '책임', writeDate: '2026-01-06', attachmentCount: 6, commentCount: 1, isStarred: false },
        { id: 20, title: '출장기안서 - [메타버스] 수요처(동서기공) 서비스 교육', docNumber: '출장기안서-2025-12-00036', requestDate: '2025-12-22', author: '이수현', authorTitle: '', writeDate: '2025-12-22', isStarred: false },
    ];

    return (
        <SidebarLayout>
            <div className="bg-white min-h-full">
                {/* Header / Tabs & Filter Row */}
                <div className="flex justify-between items-center mb-1 border-b border-gray-100 pb-1">
                    {/* Tabs */}
                    <div className="flex border border-gray-300 rounded overflow-hidden shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`px-3 py-1 text-[13px] font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                                    activeTab === tab.name 
                                    ? 'bg-gray-100 text-gray-900 shadow-inner' 
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                {tab.name}
                                {tab.count !== null && <span className="text-[10px] align-top ml-0.5 font-normal">{tab.count}</span>}
                            </button>
                        ))}
                    </div>

                    {/* Filters & Search */}
                    <div className="flex items-center gap-3 text-[13px] text-gray-700">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="checkLine" className="w-3.5 h-3.5 border-gray-300 rounded" />
                            <label htmlFor="checkLine" className="cursor-pointer">결재라인</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="checkUnconfirmed" className="w-3.5 h-3.5 border-gray-300 rounded" />
                            <label htmlFor="checkUnconfirmed" className="cursor-pointer">미확인</label>
                        </div>
                        <select className="border border-gray-300 rounded px-1.5 py-0.5 bg-white text-gray-600 focus:outline-none h-7 min-w-[80px]">
                            <option>[ 서식 ]</option>
                        </select>
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-7">
                            <select className="px-1.5 py-0 bg-white text-gray-600 border-r border-gray-300 focus:outline-none">
                                <option>제목</option>
                            </select>
                            <input type="text" placeholder="검색" className="px-2 focus:outline-none w-32 placeholder-gray-400" />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-gray-500 font-medium">1-20 / 171</span>
                            <div className="flex items-center">
                                <select className="border border-gray-300 rounded-l px-1 py-0 h-7 bg-white focus:outline-none border-r-0">
                                    <option>20</option>
                                </select>
                                <span className="border-t border-b border-gray-300 px-1.5 h-7 flex items-center bg-white text-gray-600">줄</span>
                                <div className="flex border border-gray-300 border-l-0 rounded-r h-7">
                                    <button className="px-1.5 hover:bg-gray-50 text-gray-400 border-r border-gray-300">←</button>
                                    <button className="px-1.5 hover:bg-gray-50 text-blue-500">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="relative overflow-x-auto">
                    <table className="w-full text-[13px] text-left border-collapse">
                        <thead className="text-gray-800 font-bold border-b border-gray-200 bg-white">
                            <tr>
                                <th scope="col" className="py-2 pl-2 w-[55%]">
                                    <div className="flex items-center">
                                        <span className="text-gray-400 mr-1.5 text-[11px]">★</span>
                                        제목
                                    </div>
                                </th>
                                <th scope="col" className="py-2 px-1 text-center font-bold">
                                    문서번호<span className="text-[10px] ml-1 opacity-60">▶</span>
                                </th>
                                <th scope="col" className="py-2 px-1 text-center font-bold">
                                    시행요청<span className="text-[10px] ml-1 opacity-60">▶</span>
                                </th>
                                <th scope="col" className="py-2 px-1 text-center font-bold">
                                    작성자
                                </th>
                                <th scope="col" className="py-2 pr-2 text-right font-bold">
                                    작성일자<span className="text-[10px] ml-1 opacity-60">▶</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {documents.map((doc) => (
                                <tr key={doc.id} className="hover:bg-blue-50 transition-colors group cursor-pointer">
                                    <td className="py-2.5 pl-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-300 text-[14px]">☆</span>
                                            <span className="text-gray-900 truncate max-w-[800px] leading-tight font-medium group-hover:text-blue-600 transition-colors">
                                                {doc.title}
                                            </span>
                                            <div className="flex items-center gap-1 shrink-0">
                                                {doc.attachmentCount && (
                                                    <span className="bg-gray-100 border border-gray-200 text-gray-500 px-1 rounded flex items-center gap-0.5 text-[10px] h-4">
                                                        <span className="text-[12px]">▤</span> {doc.attachmentCount}
                                                    </span>
                                                )}
                                                {doc.commentCount && (
                                                    <span className="bg-gray-100 border border-gray-200 text-gray-500 px-1 rounded flex items-center gap-0.5 text-[10px] h-4">
                                                        <span className="text-[12px] mt-0.5">💬</span> {doc.commentCount}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2.5 px-1 text-center text-gray-700 whitespace-nowrap">
                                        {doc.docNumber}
                                    </td>
                                    <td className="py-2.5 px-1 text-center text-gray-700 whitespace-nowrap">
                                        {doc.requestDate}
                                    </td>
                                    <td className="py-2.5 px-1 text-center text-gray-700 whitespace-nowrap">
                                        <span className="font-medium text-gray-900">{doc.author}</span>
                                        {doc.authorTitle && <span className="text-gray-500 ml-1">{doc.authorTitle}</span>}
                                    </td>
                                    <td className="py-2.5 pr-2 text-right text-gray-700 whitespace-nowrap font-medium">
                                        {doc.writeDate}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </SidebarLayout>
    );
};

export default ApprovalPage;
