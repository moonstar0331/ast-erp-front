import React, { useState } from 'react';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const ApprovalSettingPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('서명');

    const tabs = [
        { id: '서명', name: '서명', icon: '🖋️' },
        { id: '결재라인', name: '결재라인', icon: '⏩' },
        { id: '대리결재', name: '대리결재', icon: '👤' },
        { id: '일괄승인', name: '일괄승인', icon: '📚' },
        { id: 'Setup', name: 'Setup', icon: '⚙️' },
    ];

    return (
        <SidebarLayout>
            <div className="flex flex-col h-full bg-white">
                {/* Custom Sub Tabs (as seen in the image) */}
                <div className="flex items-center gap-1 mb-4 border-b border-gray-100 pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-t text-[13px] font-medium transition-all ${
                                activeTab === tab.id
                                    ? 'text-blue-600 border-x border-t border-gray-200 bg-white -mb-[9px] z-10'
                                    : 'text-gray-600 hover:text-blue-500'
                            }`}
                        >
                            <span className="text-[12px] opacity-70">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 pt-4">
                    {activeTab === '서명' && (
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-10 items-start">
                                {/* Signature Drawing Box */}
                                <div className="flex flex-col gap-3">
                                    <div className="w-[480px] h-[320px] border border-gray-300 rounded bg-white shadow-sm flex items-center justify-center relative">
                                        {/* In a real app, use a library like react-signature-canvas */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-200 pointer-events-none">
                                            <span className="text-sm font-light select-none">마우스로 서명을 그려주세요</span>
                                        </div>
                                        <canvas className="w-full h-full cursor-crosshair z-0" />
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50 bg-white text-gray-700 min-w-[60px]">
                                            Clear
                                        </button>
                                        <button className="px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50 bg-white text-gray-700 min-w-[70px]">
                                            저장하기
                                        </button>
                                        <button className="px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50 bg-white text-gray-700 min-w-[60px]">
                                            초기값
                                        </button>
                                    </div>
                                </div>

                                {/* Preview / Existing Signature */}
                                <div className="flex flex-col gap-3">
                                    <div className="w-[120px] h-[80px] border border-gray-300 rounded bg-white flex items-center justify-center shadow-sm overflow-hidden">
                                        {/* Mockup of a signature */}
                                        <div className="opacity-40 scale-75 transform">
                                            <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 30C20 10 40 50 60 20C70 10 80 40 90 30" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M15 40C30 45 70 35 85 40" stroke="black" strokeWidth="1" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[11px] text-gray-500 text-center">현재 등록된 서명</span>
                                </div>
                            </div>

                            {/* Help / Guide Box */}
                            <div className="mt-6 p-5 bg-[#F9FBFF] rounded border border-[#E1E8F5] max-w-2xl">
                                <h4 className="text-[13px] font-bold text-[#4A5D7F] mb-3 flex items-center gap-2">
                                    <span className="text-blue-500 text-lg">ⓘ</span> 서명 설정 안내
                                </h4>
                                <ul className="text-[12px] text-gray-600 space-y-2 list-none pl-1">
                                    <li className="flex gap-2"><span className="text-blue-400">•</span> 마우스나 터치 패드를 이용하여 빈 칸에 서명을 그려주세요.</li>
                                    <li className="flex gap-2"><span className="text-blue-400">•</span> [저장하기] 버튼을 클릭하면 현재 서명이 시스템에 등록됩니다.</li>
                                    <li className="flex gap-2"><span className="text-blue-400">•</span> 등록된 서명은 전자결재 문서 승인 시 사용됩니다.</li>
                                    <li className="flex gap-2"><span className="text-blue-400">•</span> [초기값] 버튼은 이전에 저장된 서명으로 되돌립니다.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab !== '서명' && (
                        <div className="flex flex-col items-center justify-center py-32 text-gray-300">
                            <div className="text-5xl mb-4 opacity-50">{tabs.find(t => t.id === activeTab)?.icon}</div>
                            <p className="text-[15px] font-medium">{activeTab} 설정 페이지 준비 중</p>
                            <p className="text-[13px] mt-1 opacity-60">해당 기능은 다음 업데이트에 포함될 예정입니다.</p>
                        </div>
                    )}
                </div>
            </div>
        </SidebarLayout>
    );
};

export default ApprovalSettingPage;
