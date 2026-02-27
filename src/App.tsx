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

            <Route path="/approval" element={<ApprovalPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
