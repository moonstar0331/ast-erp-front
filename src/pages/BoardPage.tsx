import React from 'react';
import { Link } from 'react-router-dom';

const BoardPage: React.FC = () => {
  const posts = [
    { id: 1, title: '2월 급여 지급 관련 통지', author: '석병택 교모', views: 136, date: '19시간', important: true },
    { id: 2, title: '2026년 건강검진', author: '안태옥 수석', views: 147, date: '1일', important: false },
    { id: 3, title: '2026년 설날 선물 관련 안내', author: '민들레 책임', views: 161, date: '4일', important: false },
    { id: 4, title: '2025년 근로소득 연말정산', author: '안대륙 수석', views: 167, date: '6일', important: false },
    { id: 5, title: '2026년도 연봉 인상 안내 및 연봉계약서 작성 방법', author: '민들레 책임', views: 164, date: '7일', important: false },
    { id: 6, title: '육아 비과세 혜택 공지', author: '민들레 책임', views: 155, date: '7일', important: false },
    { id: 7, title: '보직 변경 공지 (서윤정, 서지나)', author: '민들레 책임', views: 163, date: '2026-01-05', important: false },
    { id: 8, title: '2026년도 조직 개편(임시 조직) 공지', author: '민들레 책임', views: 166, date: '2026-01-02', important: false },
    { id: 9, title: '12월 식비, 교통비 확인하세요.', author: '민들레 책임', views: 157, date: '2026-01-02', important: false },
    { id: 10, title: '2026 대표이사 신년사', author: '박예진', views: 163, date: '2026-01-02', important: false },
    { id: 11, title: '2025년도 복지제도 안내 | 광고 본사 1층 카페마당 음료비용 지원', author: '민들레 책임', views: 164, date: '2026-01-02', important: false },
    { id: 12, title: '2025년도 성과급 지급 관련 공지', author: '민들레 책임', views: 169, date: '2025-12-30', important: false },
    { id: 13, title: '2026년 레벨업 명단 공지', author: '민들레 책임', views: 168, date: '2025-12-30', important: false },
    { id: 14, title: '2026 신년맞이 떡국 나눔 행사 안내', author: '민들레 책임', views: 167, date: '2025-12-29', important: false },
    { id: 15, title: '2026년 1월 당직', author: '김현승 수석', views: 160, date: '2025-12-29', important: false },
  ];

  const sidebarLinks = [
    '공지사항', '업무 공유', 'AST 제도 및 규정', 'AST 경조사', 'AST 피플&컬쳐', 'AST 사내교육자료', 'AST 동호회/모임',
    '업무 Idea 제안', '자유게시판', '사내게시판'
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <img src="/image/logo_ast.png" alt="AST Logo" className="h-9 object-contain" />
              <nav className="hidden md:flex items-center gap-6 text-base font-semibold text-gray-600">
                {['게시판', '이메일', '일정관리', '업무관리', '전자결재', '웹디스크', '메모장', '명함관리'].map(item => (
                  <Link to={item === '게시판' ? '/board' : '#'} key={item} className={`hover:text-gray-900 ${item === '게시판' ? 'text-blue-600' : ''}`}>{item}</Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
               <input type="text" placeholder="통합검색" className="hidden md:block w-40 h-8 px-2 border rounded-md text-sm" />
               <div className="flex items-center gap-3 text-sm">
                <span>☆</span>
                <span>🔔</span>
                <span className="font-semibold">김문성</span>
                <a href="#" className="text-gray-500">한국어</a>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-grow flex gap-6">
        {/* Sidebar */}
        <aside className="w-60 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg border h-full">
                <h2 className="text-xl font-bold mb-4">게시판</h2>
                <ul>
                    {sidebarLinks.map((link, index) => (
                        <li key={link}>
                            <a href="#" className={`block py-2 px-3 rounded-md text-sm font-medium ${index === 0 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-600'}`}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>

        {/* Board Content */}
        <div className="flex-1 bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">공지사항</h2>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm">
                    글쓰기
                </button>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div>
                    {/* Placeholder for filters */}
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <input type="text" placeholder="검색" className="w-48 h-8 px-2 border rounded-md" />
                    <span>1-20 / 1,590</span>
                    <select className="h-8 border rounded-md bg-white">
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <div className="flex">
                        <button className="px-2 py-1 border rounded-l-md hover:bg-gray-100">-</button>
                        <button className="px-2 py-1 border-t border-b hover:bg-gray-100">+</button>
                        <button className="px-2 py-1 border rounded-r-md hover:bg-gray-100">++</button>
                    </div>
                </div>
            </div>

            {/* Posts Table */}
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            <input type="checkbox" />
                        </th>
                        <th scope="col" className="py-3 px-6 w-12">★</th>
                        <th scope="col" className="py-3 px-6">제목</th>
                        <th scope="col" className="py-3 px-6">조회</th>
                        <th scope="col" className="py-3 px-6">작성자</th>
                        <th scope="col" className="py-3 px-6">수정일자</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <input type="checkbox" />
                            </td>
                            <td className="py-4 px-6">
                                {post.important ? '★' : '☆'}
                            </td>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {post.title}
                            </th>
                            <td className="py-4 px-6">{post.views}</td>
                            <td className="py-4 px-6">{post.author}</td>
                            <td className="py-4 px-6">{post.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </main>
    </div>
  );
};

export default BoardPage;