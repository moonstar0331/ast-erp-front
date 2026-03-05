import React from 'react';

const AttendanceStatusPage: React.FC = () => {
    const tableHeaders = [
        '이름', '부서', '출근', '퇴근', '지각', '연장', '출근원격', '외출', '복귀', '휴가', '기타'
    ];

    return (
        <div className="space-y-4">
            {/* Filter Bar */}
            <div className="flex items-center gap-2 p-1 border-b pb-4">
                <button className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-500 bg-white hover:bg-gray-50">
                    📅
                </button>
                <div className="flex items-center border rounded-md bg-white overflow-hidden">
                    <button className="px-2 py-1 text-gray-400 border-r hover:bg-gray-50">«</button>
                    <input 
                        type="text" 
                        value="2026-03-01" 
                        readOnly 
                        className="w-24 text-center text-sm py-1 outline-none"
                    />
                    <span className="px-1 text-gray-400">~</span>
                    <input 
                        type="text" 
                        value="2026-03-07" 
                        readOnly 
                        className="w-24 text-center text-sm py-1 outline-none"
                    />
                    <button className="px-2 py-1 text-gray-400 border-l hover:bg-gray-50">»</button>
                </div>
                
                <div className="relative">
                    <select className="appearance-none border rounded-md px-3 py-1 text-sm bg-white pr-8 outline-none text-gray-700">
                        <option>[ 부서 ]</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                        ▼
                    </div>
                </div>

                <label className="flex items-center gap-1 cursor-pointer text-sm text-gray-700 ml-2">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                    <span>퇴사자</span>
                </label>
            </div>

            {/* Table Section */}
            <div className="border rounded-sm overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            {tableHeaders.map((header, index) => (
                                <th 
                                    key={index} 
                                    className="px-4 py-2 text-[13px] font-bold text-gray-800 border-r border-gray-200 last:border-r-0 text-center"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Empty state or sample row can be added here */}
                        <tr className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                            <td colSpan={11} className="px-4 py-20 text-center text-gray-400 text-sm">
                                데이터가 없습니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceStatusPage;
