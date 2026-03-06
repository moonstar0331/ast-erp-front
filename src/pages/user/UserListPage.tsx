import React, { useState, useEffect } from 'react';
import { getUsers, type UserInfo } from '@/api/auth';

interface Employee {
    id: string;
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
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getUsers();
                const mappedEmployees: Employee[] = data.map((user: UserInfo) => ({
                    id: user.userUuid,
                    name: user.name,
                    title: user.positionName || '',
                    attendance: '', // API does not provide attendance status yet
                    department: user.deptName || '',
                    email: user.email,
                    phone: user.phone || '',
                    birthday: '', // API does not provide birthday yet
                    joinDate: '', // API does not provide joinDate yet
                    isFavorite: false,
                }));
                setEmployees(mappedEmployees);
            } catch (error) {
                console.error('Failed to fetch employees:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);

    const filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="p-6 text-center text-gray-500">Loading...</div>;
    }

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
                        {filteredEmployees.map((emp) => (
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
