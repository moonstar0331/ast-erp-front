import React, { useState } from 'react';
import SidebarLayout from "@/components/SidebarLayout.tsx";
import { useLocation } from 'react-router-dom';
const EmailSettingsPage: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('계정관리');
    const emailLinks = [
        { name: '전체메일', href: '/email/all', icon: '✉️', active: location.pathname === '/email/all' },
        { name: '보낸메일함', href: '/email/sent', icon: '🚀', active: location.pathname === '/email/sent' },
        { name: '스팸메일함', href: '/email/spam', icon: '🚫', active: location.pathname === '/email/spam' },
        { name: '지운메일함', href: '/email/trash', icon: '🗑️', active: location.pathname === '/email/trash' },
        { name: '메일설정', href: '/email/settings', icon: '⚙️', active: true },
    ];

    const settingTabs = [
        { name: '계정관리', icon: '👤' },
        { name: '메일함', icon: '📁' },
        { name: '자동분류', icon: '↕️' },
        { name: '저장용량', icon: '🌐' },
        { name: '메일백업', icon: '📥' },
        { name: '메일복구', icon: '📤' },
        { name: '인수인계', icon: '↗️' },
        { name: 'Setup', icon: '⚙️' },
    ];

    return (
        <SidebarLayout sidebarTitle="이메일" sidebarLinks={emailLinks}>
            <div className="flex flex-col h-full bg-white">
                {/* Horizontal Tabs */}
                <div className="flex items-center border-b border-gray-200 overflow-x-auto bg-white mb-4">
                    {settingTabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex items-center gap-2 px-5 py-3 text-[13px] whitespace-nowrap transition-colors ${
                        activeTab === tab.name
                        ? 'text-blue-600 font-bold border-b-2 border-blue-600 -mb-[2px]'
                        : 'text-gray-600 hover:text-blue-500'
                        }`}
                    >
                        <span className="text-[14px]">{tab.icon}</span>
                        {tab.name}
                    </button>
                    ))}
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-2 px-1 mb-4">
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-300 rounded text-[12px] text-gray-700 hover:bg-gray-50 shadow-sm">
                        <span>✉️</span> 추가하기
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-300 rounded text-[12px] text-gray-700 hover:bg-gray-50 shadow-sm">
                        <span>🔄</span> 새로고침
                    </button>
                </div>
                {/* Content Area */}
                <div className="flex-1 p-4 border-t border-gray-100 min-h-[400px]">
                {/* Placeholder for settings content */}
                </div>
            </div>
        </SidebarLayout>
    );
};
export default EmailSettingsPage;
