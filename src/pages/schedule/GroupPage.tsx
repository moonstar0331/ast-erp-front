import React, { useState } from 'react';

const GroupPage: React.FC = () => {
    const [groupName, setGroupName] = useState('');
    const [textColor, setTextColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#eeeeee');

    return (
        <div className="flex flex-col h-full bg-white">
            <h2 className="text-xl font-bold mb-6 text-gray-800">그룹관리</h2>
            
            <div className="flex items-center gap-2">
                <div className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-sm font-medium text-gray-700">
                    Text
                </div>
                
                <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white h-10 min-w-[100px]">
                    <span className="text-gray-400 mr-2">#</span>
                    <input 
                        type="text" 
                        value={textColor.replace('#', '')} 
                        onChange={(e) => setTextColor('#' + e.target.value)}
                        className="outline-none text-sm w-full"
                        placeholder="000000"
                    />
                </div>

                <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white h-10 min-w-[100px]">
                    <span className="text-gray-400 mr-2">#</span>
                    <input 
                        type="text" 
                        value={bgColor.replace('#', '')} 
                        onChange={(e) => setBgColor('#' + e.target.value)}
                        className="outline-none text-sm w-full"
                        placeholder="eeeeee"
                    />
                </div>

                <div className="flex-1 max-w-md">
                    <input 
                        type="text" 
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        placeholder="그룹이름"
                        className="w-full border border-gray-300 rounded px-3 py-2 h-10 outline-none text-sm focus:border-blue-500"
                    />
                </div>

                <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-bold hover:bg-blue-700 transition-colors h-10 shadow-sm">
                    추가하기
                </button>
            </div>

            {/* Placeholder for group list which might be added later */}
            <div className="mt-10 opacity-20 border-t pt-10 flex flex-col items-center justify-center text-gray-400">
                <span className="text-4xl mb-4">📂</span>
                <p>등록된 그룹이 없습니다.</p>
            </div>
        </div>
    );
};

export default GroupPage;
