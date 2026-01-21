import React from 'react';
import {Link} from 'react-router-dom';

const Calendar: React.FC = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dates = [
    [28, 29, 30, 31, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7],
  ];

  return (
    <div className="bg-white p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">Jan</h3>
        <span className="text-gray-500 text-sm">11:42</span>
      </div>
      <div className="grid grid-cols-7 text-center text-sm">
        {days.map((day) => (
          <div key={day} className="font-semibold text-gray-600 py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-sm">
        {dates.flat().map((date, i) => (
          <div
            key={i}
            className={`py-1 ${
              i === 16 ? 'bg-blue-500 text-white rounded-full' : ''
            } ${
              (i >= 0 && i <= 3) || (i >= 32) ? 'text-gray-300' : ''
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DashboardPage() {
    const notifications = [
        { title: '배포문서가 도착했습니다. - W03_디지털리얼리티연구소_주간업무보고', sender: '이동우 대표이사', time: '1 시간' },
        { title: '배포문서가 도착했습니다. - W03_XR사업본부_주간업무보고', sender: '이동우 대표이사', time: '1 일' },
        { title: '배포문서가 도착했습니다. - W03_DX사업본부_주간업무보고', sender: '이동우 대표이사', time: '1 일' },
        { title: '감사합니다.', sender: '이해윤 팀장', time: '3 일' },
        { title: '장/단기의 구글 원격연결 정책 활성화 했습니다.', sender: '백예찬 선임', time: '3 일'},
        { title: '[업무요청] 디지털리얼리티연구소 + 이해윤 + 사우디아라비아 유지보수를 위한 구글원격 연결 재요청 [내용]', sender: '이해윤 팀장', time: '3 일'},
        { title: '금일 심정환 책임이 올린 멤버까지 포함해서 다시 요청 드렸습니다.', sender: '이해윤 팀장', time: '3 일'},
    ];

  return (
    <>
        {/* Banner */}
        <div className="relative w-full rounded-lg bg-white border h-80 overflow-hidden">
            <img src="/image/main_2026.png" alt="Robust banner" className="absolute top-0 right-0 h-full w-full object-cover" />
            <div className="absolute bottom-4 right-4">
                <div className="flex gap-2">
                    {['게시판', '이메일', '메시지', '업무보고', '전자결재'].map(item => (
                        <Link to={item === '전자결재' ? '/approval' : (item === '게시판' ? '/notice' : '#')} key={item} className={`hover:text-gray-900 ${item === '전자결재' ? 'text-blue-600' : ''}`}>{item}</Link>
                    ))}
                </div>
            </div>
        </div>

        {/* Content Grid */}
        <div className="flex-grow flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-2">
                {Array(4).fill('단축키').map((item, i) => (
                    <button key={i} className="py-2 text-sm bg-white border rounded-md hover:bg-gray-50">{item}</button>
                ))}
                {Array(3).fill('단축키').map((item, i) => (
                    <button key={i} className="py-2 text-sm bg-white border rounded-md hover:bg-gray-50">{item}</button>
                ))}
                <button className="py-2 text-sm bg-blue-500 text-white border rounded-md hover:bg-blue-600">고객지원</button>
            </div>
            <div className="bg-white p-4 border rounded-lg">
                <h3 className="font-bold mb-2">알림</h3>
                {notifications.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-gray-700 truncate pr-4">{item.title}</span>
                        <div className="flex items-center flex-shrink-0">
                            <span className="text-sm text-gray-500 w-24 truncate">{item.sender}</span>
                            <span className="text-sm text-gray-500 w-16 text-right">{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <Calendar />
            <div className="bg-white p-4 border rounded-lg">
                <p className="text-sm">08:48 출근 [연동]</p>
            </div>
            <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <p className="text-sm"><a href="#" className="hover:underline">전자신문 SKT, 개인정보 유출 1348억 과징금에...</a></p>
                <p className="text-sm"><a href="#" className="hover:underline">전자신문 IMF "한국 성장률 1.8→1.9% 상향"......</a></p>
            </div>
            <div className="bg-white p-4 border rounded-lg">
                <button className="text-sm bg-gray-200 px-3 py-1 rounded">태그설정</button>
            </div>
          </div>
        </div>
    </>
  );
}
