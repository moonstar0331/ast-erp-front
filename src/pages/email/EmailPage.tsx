import React, { useState } from 'react';
import SidebarLayout from "@/components/SidebarLayout.tsx";
import { Link, useLocation } from 'react-router-dom';

const EmailPage: React.FC = () => {
    const location = useLocation();
    const [selectedEmails, setSelectedEmails] = useState<number[]>([]);

    const emailLinks = [
        { name: '전체메일', href: '/email/all', icon: '✉️', active: location.pathname === '/email/all' },
        { name: '보낸메일함', href: '/email/sent', icon: '🚀', active: location.pathname === '/email/sent' },
        { name: '스팸메일함', href: '/email/spam', icon: '🚫', active: location.pathname === '/email/spam' },
        { name: '지운메일함', href: '/email/trash', icon: '🗑️', active: location.pathname === '/email/trash' },
        { name: '메일설정', href: '/email/settings', icon: '⚙️', active: location.pathname === '/email/settings' },
    ];

    return (
        <SidebarLayout sidebarTitle="이메일" sidebarLinks={emailLinks}>
            {/* Header / Actions */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 px-3 rounded text-[13px] flex items-center gap-1.5 shadow-sm">
                        <span>✏️</span> 메일쓰기
                    </button>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-gray-600">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="검색" 
                            className="w-48 h-7 px-2 border border-gray-300 rounded outline-none focus:border-blue-400" 
                        />
                    </div>
                    <span>1-0 / 0</span>
                    <div className="flex items-center gap-1">
                        <select className="h-7 border border-gray-300 rounded bg-white px-1 outline-none">
                            <option>20</option>
                        </select>
                        <span>줄</span>
                    </div>
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        <button className="px-2 py-0.5 hover:bg-gray-100 border-r border-gray-300 text-gray-400">⬅️</button>
                        <button className="px-2 py-0.5 hover:bg-gray-100 text-gray-400">➡️</button>
                    </div>
                </div>
            </div>

            {/* Email List Table */}
            <div className="relative overflow-x-auto border-t border-gray-200">
                <table className="w-full text-sm text-left">
                    <thead className="text-[12px] text-gray-700 font-bold bg-white border-b border-gray-200">
                        <tr>
                            <th scope="col" className="p-2 w-8">
                                <input type="checkbox" className="rounded" />
                            </th>
                            <th scope="col" className="py-2 px-1 w-6 text-center text-gray-400">★</th>
                            <th scope="col" className="py-2 px-3 w-1/4">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    이메일 <span>▶</span>
                                </div>
                            </th>
                            <th scope="col" className="py-2 px-3">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    제목 <span>▶</span>
                                </div>
                            </th>
                            <th scope="col" className="py-2 px-3 w-20 text-right">
                                <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-blue-600">
                                    크기 <span>▶</span>
                                </div>
                            </th>
                            <th scope="col" className="py-2 px-3 w-32 text-right">
                                <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-blue-600">
                                    날짜 <span className="text-[10px]">↓↑</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Empty state or list of emails would go here */}
                        <tr className="bg-white border-b border-gray-50">
                            <td colSpan={6} className="py-20 text-center text-gray-400">
                                메일이 없습니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SidebarLayout>
    );
};

export default EmailPage;
