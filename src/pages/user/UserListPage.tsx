import React, { useState } from 'react';

interface Employee {
    id: number;
    name: string;
    title: string;
    attendance: string;
    department: string;
    email: string;
    phone: string;
    birthday: string;
    joinDate: string;
    isFavorite: boolean;
    imageUrl?: string;
}

const UserListPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const employees: Employee[] = [
        { id: 1, name: '이동우', title: '대표이사', attendance: '', department: '임원', email: 'dklee2@astkorea.net', phone: '010-5391-9300', birthday: '', joinDate: '', isFavorite: false },
        { id: 2, name: '석병택', title: '고문', attendance: '', department: '임원', email: 'bt.suk@astkorea.net', phone: '010-8823-3893', birthday: '', joinDate: '', isFavorite: false },
        { id: 3, name: '싸비/Sabby', title: 'CTO', attendance: '', department: '임원', email: 'sabby@astkorea.net', phone: '010-3166-4404', birthday: '', joinDate: '', isFavorite: false },
        { id: 4, name: '김귀동', title: '본부장', attendance: '출근', department: '임원', email: 'gd.kim@astkorea.net', phone: '010-7434-9189', birthday: '', joinDate: '', isFavorite: false },
        { id: 5, name: '이웅희', title: '본부장', attendance: '출근', department: '임원', email: 'wh.lee@astkorea.net', phone: '010-3363-8618', birthday: '', joinDate: '', isFavorite: false },
        { id: 6, name: '임창수', title: '본부장', attendance: '출근', department: '임원', email: 'cs.lim@astkorea.net', phone: '010-4873-7582', birthday: '', joinDate: '', isFavorite: false },
        { id: 7, name: '김채갑', title: '이사', attendance: '출근', department: '임원', email: 'sungabi@astkorea.net', phone: '010-8994-7296', birthday: '', joinDate: '', isFavorite: false },
        { id: 8, name: '김현승', title: '수석', attendance: '출근', department: '관리팀', email: 'hs.kim@astkorea.net', phone: '010-4487-8879', birthday: '', joinDate: '', isFavorite: false },
        { id: 9, name: '안태욱', title: '수석', attendance: '출근', department: '관리팀', email: 'to.an@astkorea.net', phone: '010-6586-0345', birthday: '', joinDate: '', isFavorite: false },
        { id: 10, name: '민들레', title: '책임', attendance: '출근', department: '관리팀', email: 'dr.min@astkorea.net', phone: '', birthday: '', joinDate: '', isFavorite: false },
        { id: 11, name: '백예찬', title: '선임', attendance: '출근', department: '관리팀', email: 'yc.beck@astkorea.net', phone: '', birthday: '', joinDate: '', isFavorite: false },
        { id: 12, name: '고건', title: '리더', attendance: '퇴근', department: 'Digital Reality Labs-Engineering 파트', email: 'k.ko@astkorea.net', phone: '010-2621-6778', birthday: '', joinDate: '', isFavorite: false },
        { id: 13, name: '김대근', title: '리더', attendance: '출근', department: 'Digital Reality Labs-Engineering 파트', email: 'daegeun.k@astkorea.net', phone: '010-9968-7803', birthday: '', joinDate: '', isFavorite: false },
        { id: 14, name: '김동근', title: '리더', attendance: '출근', department: 'Digital Reality Labs-Engineering 파트', email: 'dg.kim@astkorea.net', phone: '010-2536-3474', birthday: '', joinDate: '', isFavorite: false },
        { id: 15, name: '이해윤', title: '리더', attendance: '출근', department: 'Digital Reality Labs-Engineering 파트', email: 'hy.lee@astkorea.net', phone: '010-3665-8545', birthday: '', joinDate: '', isFavorite: false },
    ];

    return (
        <div className="flex flex-col gap-4">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-gray-700">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                        <span>퇴직자 표시</span>
                    </label>
                    <button className="px-3 py-1 border border-gray-300 rounded text-[13px] text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-1">
                        [ 부서 ]
                    </button>
                </div>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="검색" 
                        className="w-64 border border-gray-300 rounded px-3 py-1.5 text-[13px] outline-none focus:border-blue-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Employee Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white border-y border-gray-200">
                            <th className="w-10 px-4 py-3 text-[13px] font-bold text-gray-700"></th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-x border-gray-200 text-center w-[200px]">이름</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-r border-gray-200 text-center w-[120px]">근태관리</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-r border-gray-200 text-center">부서</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-r border-gray-200 text-center">이메일</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-r border-gray-200 text-center">전화번호</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-r border-gray-200 text-center w-[100px]">생일</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700 border-r border-gray-200 text-center w-[100px]">입사일</th>
                            <th className="px-4 py-3 text-[13px] font-bold text-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50 group">
                                <td className="px-4 py-2.5 text-center">
                                    <span className={`cursor-pointer ${emp.isFavorite ? 'text-yellow-400' : 'text-gray-300 group-hover:text-gray-400'}`}>☆</span>
                                </td>
                                <td className="px-4 py-2.5 border-x border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                                            {emp.imageUrl ? (
                                                <img src={emp.imageUrl} alt={emp.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-gray-300 text-lg">👤</span>
                                            )}
                                        </div>
                                        <span className="text-[13px] text-gray-800 font-medium">{emp.name} {emp.title}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2.5 border-r border-gray-100 text-center text-[13px] text-gray-700">
                                    {emp.attendance}
                                </td>
                                <td className="px-4 py-2.5 border-r border-gray-100 text-[13px] text-gray-700">
                                    {emp.department}
                                </td>
                                <td className="px-4 py-2.5 border-r border-gray-100 text-[13px] text-blue-600 hover:underline cursor-pointer">
                                    {emp.email}
                                </td>
                                <td className="px-4 py-2.5 border-r border-gray-100 text-[13px] text-gray-700">
                                    {emp.phone}
                                </td>
                                <td className="px-4 py-2.5 border-r border-gray-100 text-[13px] text-gray-700 text-center">
                                    {emp.birthday || '-'}
                                </td>
                                <td className="px-4 py-2.5 border-r border-gray-100 text-[13px] text-gray-700 text-center">
                                    {emp.joinDate || '-'}
                                </td>
                                <td className="px-4 py-2.5 text-right">
                                    <button className="px-2 py-1 border border-gray-300 rounded text-[11px] text-gray-600 hover:bg-gray-100 bg-white">
                                        채팅로그
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserListPage;
