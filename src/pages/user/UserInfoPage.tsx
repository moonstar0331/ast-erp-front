import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, type UserInfo } from '@/api/auth';
import { getCookie } from '@/utils/cookie';

const UserInfoPage: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userUuid = getCookie('userUuid');
            if (userUuid) {
                try {
                    const data = await getUserInfo(userUuid);
                    setUserInfo(data);
                } catch (error) {
                    console.error('Failed to fetch user info:', error);
                }
            }
        };
        fetchUserInfo();
    }, []);

    const handleViewRecordCard = () => {
        const userUuid = getCookie('userUuid');
        if (userUuid) {
            navigate(`/user/view/${userUuid}`);
        }
    };

    const infoFields = [
        { label: '사용자아이디', value: userInfo?.loginId || '' },
        { label: '이름', value: userInfo?.name || '' },
        { label: '직급', value: userInfo?.positionName || '' },
        { label: '부서', value: userInfo?.deptName || '' },
        { label: '이메일', value: userInfo?.email || '' },
        { label: '전화번호', value: userInfo?.phone || '' },
    ];

    const settings = [
        { label: '알림', type: 'checkbox', options: ['알림 보내지 않기', '변경 시 묻기', '큰 알림'], checked: [false, true, false] },
        { label: '댓글쓰기', type: 'checkbox', options: ['댓글저장 버튼 표시'], checked: [false] },
        { label: '댓글순서', type: 'checkbox', options: ['최근 작성된 댓글 우선 표시'], checked: [false] },
        { label: '메시지', type: 'checkbox', options: ['오래된 알림쪽지 우선 표시', '안읽은 메시지 카운트'], checked: [false, false] },
        { label: '첨부파일', type: 'checkbox', options: ['에디터 위에 파일을 끌어서(Drag&Drop) 첨부 허용'], checked: [true] },
        { label: '날짜시간 형식', type: 'select', value: '[ SYSTEM ]' },
        { label: '날짜 형식', type: 'select', value: '[ SYSTEM ]' },
        { label: '기간형태 사용 안함', type: 'checkbox', options: ['기간형태 사용 안함'], checked: [false] },
        { label: '시간대역', type: 'select', value: '[ SYSTEM ]' },
        { label: 'Countdown', type: 'custom', render: () => (
            <div className="flex gap-2">
                <input type="text" placeholder="yyyy-mm-dd" className="border border-gray-300 rounded px-2 py-1 text-sm w-32" />
                <input type="text" placeholder="hh:mm" className="border border-gray-300 rounded px-2 py-1 text-sm w-20" />
                <button className="bg-gray-100 border border-gray-300 px-3 py-1 rounded text-xs">설정</button>
            </div>
        )},
        { label: 'Weather', type: 'text', value: 'City Code of openweathermap.org' },
        { label: 'RSS', type: 'text', value: 'Site@http://www.test.com/rss' },
        { label: '알리미코드', type: 'text', value: userInfo?.email || '' },
        { label: '환율', type: 'custom', render: () => (
            <div className="flex gap-2">
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>선택 ▲</option>
                </select>
                <button className="bg-gray-100 border border-gray-300 px-3 py-1 rounded text-xs">설정</button>
            </div>
        )},
    ];

    return (
        <div className="flex flex-col gap-6 bg-white">
            {/* Top Toolbar */}
            <div className="flex gap-2 border-b border-gray-100 pb-4">
                <button 
                    onClick={handleViewRecordCard}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50"
                >
                    👤 인사기록카드
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50">
                    🔑 비밀번호변경 : 2025-01-02
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50">
                    ➡️ 로그인이력
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50">
                    🔔 브라우저 알림
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50">
                    💬 채팅창 초기화
                </button>
            </div>

            <div className="flex gap-10">
                {/* Left Section: Profile & Basic Info */}
                <div className="flex flex-col gap-6 w-[450px]">
                    <div className="flex gap-6 items-start">
                        <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                            <span className="text-gray-300 text-5xl">👤</span>
                        </div>
                        <div className="flex gap-2 pt-4">
                            <button className="px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50 bg-white">사진변경</button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">삭제하기</button>
                        </div>
                    </div>

                    <div className="flex flex-col border-t border-gray-100">
                        {infoFields.map((field, idx) => (
                            <div key={idx} className="flex border-b border-gray-100">
                                <div className="w-32 bg-gray-50/50 px-4 py-2.5 text-[13px] font-medium text-gray-600 border-r border-gray-100">
                                    {field.label}
                                </div>
                                <div className="flex-1 px-4 py-2.5 text-[13px] text-gray-800">
                                    {field.value || <span className="text-gray-300">-</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: Detailed Settings */}
                <div className="flex-1 flex flex-col border-t border-gray-100">
                    {settings.map((setting, idx) => (
                        <div key={idx} className="flex border-b border-gray-100">
                            <div className="w-40 bg-gray-50/50 px-4 py-2.5 text-[13px] font-medium text-gray-600 border-r border-gray-100">
                                {setting.label}
                            </div>
                            <div className="flex-1 px-4 py-2.5 text-[13px]">
                                {setting.type === 'checkbox' && (
                                    <div className="flex gap-4">
                                        {setting.options?.map((opt, i) => (
                                            <label key={i} className="flex items-center gap-1.5 cursor-pointer">
                                                <input type="checkbox" checked={setting.checked?.[i]} readOnly className="w-3.5 h-3.5" />
                                                <span className="text-gray-700">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {setting.type === 'select' && (
                                    <select className="border border-gray-300 rounded px-2 py-1 text-sm w-full outline-none focus:border-blue-400">
                                        <option>{setting.value}</option>
                                    </select>
                                )}
                                {setting.type === 'text' && (
                                    <input type="text" value={setting.value} readOnly className="border border-gray-300 rounded px-3 py-1 text-sm w-full bg-white text-gray-500" />
                                )}
                                {setting.type === 'custom' && setting.render?.()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserInfoPage;
