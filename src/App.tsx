import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import BoardPage from './pages/board/BoardPage.tsx';
import './tailwind.css';
import ApprovalPage from "@/pages/ApprovalPage.tsx";
import Layout from "@/components/Layout.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* 게시판 관련 중첩 라우팅 */}
            <Route path="/board">
                <Route index element={<Navigate to="/board/notice" replace />} />
                <Route path="notice" element={<BoardPage />} />
                <Route path="work-share" element={<BoardPage />} />
                <Route path="policy" element={<BoardPage />} />
                <Route path="event" element={<BoardPage />} />
                <Route path="people" element={<BoardPage />} />
                <Route path="education" element={<BoardPage />} />
                <Route path="club" element={<BoardPage />} />
                <Route path="idea" element={<BoardPage />} />
                <Route path="free" element={<BoardPage />} />
                <Route path="photo" element={<BoardPage />} />
            </Route>

            {/* 이메일 관련 중첩 라우팅 */}
            <Route path="/email">
                <Route index element={<Navigate to="/email/all" replace />} />
                <Route path="all" element={<BoardPage />} />
                <Route path="sent" element={<BoardPage />} />
                <Route path="spam" element={<BoardPage />} />
                <Route path="trash" element={<BoardPage />} />
                <Route path="setting" element={<BoardPage />} />
            </Route>

            {/* 일정관리 관련 중첩 라우팅 */}
            <Route path="/schedule">
                <Route index element={<Navigate to="/schedule/monthly" replace />} />
                <Route path="monthly" element={<BoardPage />} />
                <Route path="reserve" element={<BoardPage />} />
                <Route path="group" element={<BoardPage />} />
            </Route>

            {/* 업무관리 관련 중첩 라우팅 */}
            <Route path="/task">
                <Route index element={<Navigate to="/task/status" replace />} />
                <Route path="status" element={<BoardPage />} />
                <Route path="chat" element={<BoardPage />} />
                <Route path="memo" element={<BoardPage />} />
                <Route path="my" element={<BoardPage />} />
                <Route path="report" element={<BoardPage />} />
                <Route path="report-status" element={<BoardPage />} />
                <Route path="recent" element={<BoardPage />} />
                <Route path="comments" element={<BoardPage />} />
                <Route path="project" element={<BoardPage />} />
                <Route path="voucher" element={<BoardPage />} />
            </Route>

            {/* 전자결재 관련 중첩 라우팅 */}
            <Route path="/approval">
                <Route index element={<Navigate to="/approval/status" replace />} />
                <Route path="new" element={<BoardPage />} />
                <Route path="status" element={<ApprovalPage />} />
                <Route path="setting" element={<BoardPage />} />
            </Route>

            {/* 웹디스크 관련 중첩 라우팅 */}
            <Route path="/disk">
                <Route index element={<Navigate to="/disk/list" replace />} />
                <Route path="list" element={<BoardPage />} />
                <Route path="download" element={<BoardPage />} />
            </Route>

            {/* 메모장 관련 중첩 라우팅 */}
            <Route path="/memo">
                <Route index element={<Navigate to="/memo/add" replace />} />
                <Route path="add" element={<BoardPage />} />
                <Route path="undo" element={<BoardPage />} />
            </Route>
            
            {/* 명함관리 관련 중첩 라우팅 */}
            <Route path="/card">
                <Route index element={<Navigate to="/card/list" replace />} />
                <Route path="list" element={<BoardPage />} />
                <Route path="company-public" element={<BoardPage />} />
                <Route path="unclassified" element={<BoardPage />} />
                <Route path="company-list" element={<BoardPage />} />
                <Route path="group" element={<BoardPage />} />
            </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
