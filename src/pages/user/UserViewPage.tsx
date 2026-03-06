import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserInfo, type UserInfo } from '@/api/auth';

const UserViewPage: React.FC = () => {
    const { userUuid } = useParams<{ userUuid: string }>();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
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
    }, [userUuid]);

    const LabelBox = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
        <div className={`bg-gray-50 border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600 flex items-center justify-center min-w-[100px] ${className}`}>
            {children}
        </div>
    );

    const ValueBox = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
        <div className={`border border-gray-200 px-3 py-1.5 text-[13px] text-gray-800 flex items-center min-w-[150px] bg-white ${className}`}>
            {children}
        </div>
    );

    const SectionTitle = ({ title }: { title: string }) => (
        <div className="text-[15px] font-bold text-gray-800 mb-2 mt-6">
            [ {title} ]
        </div>
    );

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Top Toolbar */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                    <button onClick={() => navigate('/user/list')} className="px-4 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50 flex items-center gap-1">
                        📋 목록
                    </button>
                    <button className="px-4 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50 flex items-center gap-1">
                        🖼️ Photo
                    </button>
                    <button className="px-4 py-1.5 border border-gray-300 rounded text-[13px] hover:bg-gray-50 flex items-center gap-1">
                        📝 수정
                    </button>
                </div>
                <div className="bg-gray-500 text-white px-3 py-1 rounded text-xs">
                    조회 1
                </div>
            </div>

            {/* [ 개인정보 ] Section */}
            <SectionTitle title="개인정보" />
            <div className="flex gap-6">
                {/* Profile Image */}
                <div className="w-40 h-48 border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <div className="text-gray-300 text-8xl">👤</div>
                </div>

                {/* Info Grid */}
                <div className="flex-1 flex flex-col gap-1.5">
                    <div className="flex gap-1.5">
                        <LabelBox>이름</LabelBox>
                        <ValueBox className="flex-1 font-bold">{userInfo?.name || '-'}</ValueBox>
                        <LabelBox>사원번호</LabelBox>
                        <ValueBox className="flex-1"></ValueBox>
                        <div className="flex items-center gap-4 px-4 text-[13px]">
                            <label className="flex items-center gap-1.5"><input type="radio" name="gender" disabled /> 남자</label>
                            <label className="flex items-center gap-1.5"><input type="radio" name="gender" disabled /> 여자</label>
                        </div>
                    </div>
                    <div className="flex gap-1.5">
                        <LabelBox>한자</LabelBox>
                        <ValueBox className="flex-1"></ValueBox>
                        <LabelBox>영문</LabelBox>
                        <ValueBox className="flex-1"></ValueBox>
                    </div>
                    <div className="flex gap-1.5">
                        <LabelBox>주민등록번호</LabelBox>
                        <ValueBox className="flex-1"></ValueBox>
                        <LabelBox>생일</LabelBox>
                        <ValueBox className="flex-1"></ValueBox>
                        <div className="flex items-center gap-4 px-4 text-[13px]">
                            <label className="flex items-center gap-1.5"><input type="radio" name="lunar" disabled /> 양력</label>
                            <label className="flex items-center gap-1.5"><input type="radio" name="lunar" disabled /> 음력</label>
                        </div>
                    </div>
                    <div className="flex gap-1.5">
                        <LabelBox>전화번호</LabelBox>
                        <ValueBox className="flex-1">{userInfo?.phone || '-'}</ValueBox>
                        <LabelBox>이메일</LabelBox>
                        <ValueBox className="flex-1">{userInfo?.email || '-'}</ValueBox>
                    </div>
                </div>
            </div>

            {/* [ 근무 ] Section */}
            <SectionTitle title="근무" />
            <div className="flex flex-col gap-1.5">
                <div className="flex gap-1.5">
                    <LabelBox className="flex-1">배치일자</LabelBox>
                    <LabelBox className="flex-1">부서</LabelBox>
                    <LabelBox className="flex-1">직책</LabelBox>
                    <LabelBox className="flex-1">업무분야</LabelBox>
                </div>
                <div className="flex gap-1.5">
                    <ValueBox className="flex-1 h-9"></ValueBox>
                    <ValueBox className="flex-1 h-9">{userInfo?.deptName || '-'}</ValueBox>
                    <ValueBox className="flex-1 h-9">{userInfo?.positionName || '-'}</ValueBox>
                    <ValueBox className="flex-1 h-9"></ValueBox>
                </div>
            </div>

            {/* [ 주소 ] Section */}
            <SectionTitle title="주소" />
            <div className="flex flex-col gap-1.5">
                <div className="flex gap-1.5">
                    <LabelBox>본적</LabelBox>
                    <ValueBox className="flex-1 h-9"></ValueBox>
                </div>
                <div className="flex gap-1.5">
                    <LabelBox>주소</LabelBox>
                    <ValueBox className="flex-1 h-9"></ValueBox>
                </div>
            </div>

            {/* [ 학력 ] Section */}
            <SectionTitle title="학력" />
            <div className="flex flex-col gap-1.5">
                <div className="flex gap-1.5 text-center">
                    <LabelBox className="flex-1">학업기간</LabelBox>
                    <LabelBox className="flex-1">교육기관</LabelBox>
                    <LabelBox className="flex-1">전공/학위</LabelBox>
                    <LabelBox className="flex-1">구분</LabelBox>
                    <LabelBox className="flex-1">비고</LabelBox>
                </div>
                {[1, 2].map((_, i) => (
                    <div key={i} className="flex gap-1.5">
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                    </div>
                ))}
            </div>

            {/* [ 병역 ] Section */}
            <SectionTitle title="병역" />
            <div className="flex flex-col gap-1.5">
                <div className="flex gap-1.5">
                    <LabelBox className="flex-1">복무기간</LabelBox>
                    <LabelBox className="flex-1">군별</LabelBox>
                    <LabelBox className="flex-1">계급</LabelBox>
                </div>
                <div className="flex gap-1.5">
                    <ValueBox className="flex-1 h-9"></ValueBox>
                    <ValueBox className="flex-1 h-9"></ValueBox>
                    <ValueBox className="flex-1 h-9"></ValueBox>
                </div>
                <div className="flex gap-1.5 mt-1.5">
                    <LabelBox className="flex-1">제대구분</LabelBox>
                    <LabelBox className="flex-1">면제사유</LabelBox>
                </div>
                <div className="flex gap-1.5">
                    <ValueBox className="flex-1 h-9"></ValueBox>
                    <ValueBox className="flex-1 h-9"></ValueBox>
                </div>
            </div>

            {/* [ 경력 ] Section */}
            <SectionTitle title="경력" />
            <div className="flex flex-col gap-1.5">
                <div className="flex gap-1.5 text-center">
                    <LabelBox className="flex-1">근무기간</LabelBox>
                    <LabelBox className="flex-1">회사명</LabelBox>
                    <LabelBox className="flex-1">부서</LabelBox>
                    <LabelBox className="flex-1">직책</LabelBox>
                    <LabelBox className="flex-1">업무분야</LabelBox>
                </div>
                {[1, 2].map((_, i) => (
                    <div key={i} className="flex gap-1.5">
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                    </div>
                ))}
            </div>

            {/* [ 가족 ] Section */}
            <SectionTitle title="가족" />
            <div className="flex flex-col gap-1.5">
                <div className="flex gap-1.5 text-center">
                    <LabelBox className="w-40">이름</LabelBox>
                    <LabelBox className="flex-1">주민등록번호</LabelBox>
                    <LabelBox className="flex-1">직업</LabelBox>
                    <LabelBox className="w-40">관계</LabelBox>
                </div>
                {[1, 2].map((_, i) => (
                    <div key={i} className="flex gap-1.5">
                        <ValueBox className="w-40 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="flex-1 h-9"></ValueBox>
                        <ValueBox className="w-40 h-9"></ValueBox>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserViewPage;
