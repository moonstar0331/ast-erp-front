import React, { useState } from 'react';

const UserGroupPage: React.FC = () => {
    const [groupName, setGroupName] = useState('');

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-800">그룹관리</h2>
            
            <div className="flex gap-2">
                <input 
                    type="text" 
                    placeholder="그룹이름" 
                    className="w-64 border border-gray-300 rounded px-3 py-1.5 text-[13px] outline-none focus:border-blue-400"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
                <button className="px-4 py-1.5 border border-gray-300 rounded text-[13px] text-gray-700 bg-white hover:bg-gray-50">
                    추가하기
                </button>
            </div>
        </div>
    );
};

export default UserGroupPage;
