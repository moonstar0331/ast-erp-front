import React, { useState } from 'react';

const UserTagPage: React.FC = () => {
    const [tag, setTag] = useState('');

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-2">
                <input 
                    type="text" 
                    placeholder="Tag" 
                    className="w-64 border border-gray-300 rounded px-3 py-1.5 text-[13px] outline-none focus:border-blue-400"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
                <button className="px-4 py-1.5 border border-gray-300 rounded text-[13px] text-gray-700 bg-white hover:bg-gray-50">
                    저장하기
                </button>
            </div>
        </div>
    );
};

export default UserTagPage;
