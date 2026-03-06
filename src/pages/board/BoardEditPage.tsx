import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const BoardEditPage: React.FC = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleBack = () => {
        navigate(-1);
    };

    const handleSave = () => {
        // Implementation for saving the post
        console.log('Saving post:', { title, content });
        navigate(-1);
    };

    return (
        <SidebarLayout>
            <div className="flex flex-col h-full bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
                {/* Title Input Area */}
                <div className="border-b border-gray-200">
                    <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목" 
                        className="w-full px-4 py-3 text-[15px] outline-none placeholder-gray-300"
                    />
                </div>

                {/* Editor Toolbar */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F8F9FA] border-b border-gray-200 overflow-x-auto">
                    <div className="flex items-center gap-0.5">
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-[13px] min-w-[28px]">A</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-[13px] min-w-[28px]">T↕</button>
                    </div>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <div className="flex items-center gap-0.5">
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-[13px] min-w-[28px]">A</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-800 font-bold text-[15px] min-w-[28px]">B</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-800 italic text-[15px] min-w-[28px]">I</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-800 underline underline-offset-2 text-[15px] min-w-[28px]">U</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-800 line-through text-[15px] min-w-[28px]">S</button>
                    </div>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <div className="flex items-center gap-0.5 text-lg leading-none">
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">×</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">≡</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">≡</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">≡</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">≡</button>
                    </div>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <div className="flex items-center gap-0.5">
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">1.</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">•</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">-</button>
                    </div>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <div className="flex items-center gap-0.5">
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">🔗</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">📅</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">🖼️</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-sm font-bold">&lt;/&gt;</button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-h-[500px]">
                    <textarea 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-full p-4 outline-none resize-none text-[15px] leading-relaxed"
                    />
                </div>

                {/* Bottom Buttons */}
                <div className="flex items-center gap-2 p-3 bg-white border-t border-gray-100">
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                        첨부파일
                    </button>
                    <button 
                        onClick={handleSave}
                        className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        저장하기
                    </button>
                    <button 
                        onClick={handleBack}
                        className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-orange-300 rounded hover:bg-orange-400"
                    >
                        취소
                    </button>
                </div>
            </div>
        </SidebarLayout>
    );
};

export default BoardEditPage;
