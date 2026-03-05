import React from 'react';

const UserBookmarkPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1 border border-gray-300 rounded text-[12px] hover:bg-gray-50 bg-white">
                    ☆ 즐겨찾기추가
                </button>
            </div>
        </div>
    );
};

export default UserBookmarkPage;
