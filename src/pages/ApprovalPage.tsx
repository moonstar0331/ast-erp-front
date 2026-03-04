import React, { useState } from 'react';
import SidebarLayout from "@/components/SidebarLayout.tsx";

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

    return (
        <SidebarLayout>
            <div className="bg-white min-h-full">
                {/* Header / Tabs & Filter Row */}
                <div className="flex justify-between items-center mb-1 border-b border-gray-100 pb-1">
                    {/* Tabs */}
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`px-3 py-1 text-[13px] font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                                    activeTab === tab.name 
                                    ? 'bg-gray-100 text-gray-900' 
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                {tab.name}
                                {tab.count !== null && <span className="text-[10px] align-top ml-0.5">{tab.count}</span>}
                            </button>
                        ))}
                    </div>

                    {/* Filters & Search */}
                    <div className="flex items-center gap-3 text-[13px] text-gray-700">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="checkLine" className="w-3.5 h-3.5" />
                            <label htmlFor="checkLine">결재라인</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="checkUnconfirmed" className="w-3.5 h-3.5" />
                            <label htmlFor="checkUnconfirmed">미확인</label>
                        </div>
                        <select className="border border-gray-300 rounded px-1.5 py-0.5 bg-white text-gray-600 focus:outline-none h-7 min-w-[80px]">
                            <option>[ 서식 ]</option>
                        </select>
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-7">
                            <select className="px-1.5 py-0 bg-white text-gray-600 border-r border-gray-300 focus:outline-none">
                                <option>제목</option>
                            </select>
                            <input type="text" placeholder="검색" className="px-2 focus:outline-none w-32" />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-gray-500">1-0 / 0</span>
                            <div className="flex items-center">
                                <select className="border border-gray-300 rounded-l px-1 py-0 h-7 bg-white focus:outline-none border-r-0">
                                    <option>20</option>
                                </select>
                                <span className="border-t border-b border-gray-300 px-1.5 h-7 flex items-center bg-white text-gray-600">줄</span>
                                <div className="flex border border-gray-300 border-l-0 rounded-r h-7">
                                    <button className="px-1.5 hover:bg-gray-50 text-gray-400 border-r border-gray-300">←</button>
                                    <button className="px-1.5 hover:bg-gray-50 text-gray-400">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Header */}
                <div className="flex border-b border-gray-200 py-1.5 text-[13px] font-bold text-gray-800">
                    <div className="w-[45%] flex items-center pl-1">
                        <span className="text-gray-400 mr-1 text-[11px]">★</span> 제목
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        문서번호<span className="text-[10px] ml-1 opacity-60">▶</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        시행요청<span className="text-[10px] ml-1 opacity-60">▶</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        작성자
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        작성일자<span className="text-[10px] ml-1 opacity-60">▶</span>
                    </div>
                </div>

                {/* Empty State */}
                <div className="py-20 pl-2">
                    <span className="text-xl text-gray-800 font-medium">검색된 자료가 없습니다.</span>
                </div>
            </div>
        </SidebarLayout>
    );
};

export default ApprovalPage;
