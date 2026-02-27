import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import NoticePage from './pages/board/NoticePage.tsx';
import './tailwind.css';
import ApprovalPage from "@/pages/ApprovalPage.tsx";
import Layout from "@/components/Layout.tsx";
import WorkSharePage from "@/pages/board/WorkSharePage.tsx";
import PolicyPage from "@/pages/board/PolicyPage.tsx";
import EventPage from "@/pages/board/EventPage.tsx";
import PeoplePage from "@/pages/board/PeoplePage.tsx";
import EducationPage from "@/pages/board/EducationPage.tsx";
import ClubPage from "@/pages/board/ClubPage.tsx";
import IdeaPage from "@/pages/board/IdeaPage.tsx";
import FreePage from "@/pages/board/FreePage.tsx";

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
                <Route path="notice" element={<NoticePage />} />
                <Route path="work-share" element={<WorkSharePage />} />
                <Route path="policy" element={<PolicyPage />} />
                <Route path="event" element={<EventPage />} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="education" element={<EducationPage />} />
                <Route path="club" element={<ClubPage />} />
                <Route path="idea" element={<IdeaPage />} />
                <Route path="free" element={<FreePage />} />
                <Route path="photo" element={<NoticePage />} />
            </Route>

            {/* 이메일 관련 중첩 라우팅 */}
            <Route path="/email">
                <Route index element={<Navigate to="/email/all" replace />} />
                <Route path="all" element={<NoticePage />} />
                <Route path="sent" element={<NoticePage />} />
                <Route path="spam" element={<NoticePage />} />
                <Route path="trash" element={<NoticePage />} />
                <Route path="setting" element={<NoticePage />} />
            </Route>

            {/* 일정관리 관련 중첩 라우팅 */}
            <Route path="/schedule">
                <Route index element={<Navigate to="/schedule/monthly" replace />} />
                <Route path="monthly" element={<NoticePage />} />
                <Route path="reserve" element={<NoticePage />} />
                <Route path="group" element={<NoticePage />} />
            </Route>

            {/* 업무관리 관련 중첩 라우팅 */}
            <Route path="/task">
                <Route index element={<Navigate to="/task/status" replace />} />
                <Route path="status" element={<NoticePage />} />
                <Route path="chat" element={<NoticePage />} />
                <Route path="memo" element={<NoticePage />} />
                <Route path="my" element={<NoticePage />} />
                <Route path="report" element={<NoticePage />} />
                <Route path="report-status" element={<NoticePage />} />
                <Route path="recent" element={<NoticePage />} />
                <Route path="comments" element={<NoticePage />} />
                <Route path="project" element={<NoticePage />} />
                <Route path="voucher" element={<NoticePage />} />
            </Route>

            {/* 전자결재 관련 중첩 라우팅 */}
            <Route path="/approval">
                <Route index element={<Navigate to="/approval/status" replace />} />
                <Route path="new" element={<NoticePage />} />
                <Route path="status" element={<ApprovalPage />} />
                <Route path="setting" element={<NoticePage />} />
            </Route>

            {/* 웹디스크 관련 중첩 라우팅 */}
            <Route path="/disk">
                <Route index element={<Navigate to="/disk/list" replace />} />
                <Route path="list" element={<NoticePage />} />
                <Route path="download" element={<NoticePage />} />
            </Route>

            {/* 메모장 관련 중첩 라우팅 */}
            <Route path="/memo">
                <Route index element={<Navigate to="/memo/add" replace />} />
                <Route path="add" element={<NoticePage />} />
                <Route path="undo" element={<NoticePage />} />
            </Route>
            
            {/* 명함관리 관련 중첩 라우팅 */}
            <Route path="/card">
                <Route index element={<Navigate to="/card/list" replace />} />
                <Route path="list" element={<NoticePage />} />
                <Route path="company-public" element={<NoticePage />} />
                <Route path="unclassified" element={<NoticePage />} />
                <Route path="company-list" element={<NoticePage />} />
                <Route path="group" element={<NoticePage />} />
            </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
