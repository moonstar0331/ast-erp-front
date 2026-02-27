import { Route, Routes } from 'react-router-dom';
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

            <Route path="/board" element={<NoticePage />} />
            <Route path="/board/notice" element={<NoticePage />} />
            <Route path="/board/work-share" element={<WorkSharePage />} />
            <Route path="/board/policy" element={<PolicyPage />} />
            <Route path="/board/event" element={<EventPage />} />
            <Route path="/board/people" element={<PeoplePage />} />
            <Route path="/board/education" element={<EducationPage />} />
            <Route path="/board/club" element={<ClubPage />} />
            <Route path="/board/idea" element={<IdeaPage />} />
            <Route path="/board/free" element={<FreePage />} />
            <Route path="/board/photo" element={<NoticePage />} />

            <Route path="/approval" element={<ApprovalPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
