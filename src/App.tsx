import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import NoticePage from './pages/board/NoticePage.tsx';
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

            <Route path="/board" element={<NoticePage />} />
            <Route path="/board/notice" element={<NoticePage />} />
            <Route path="/board/work-share" element={<NoticePage />} />
            <Route path="/board/policy" element={<NoticePage />} />
            <Route path="/board/event" element={<NoticePage />} />
            <Route path="/board/people" element={<NoticePage />} />
            <Route path="/board/education" element={<NoticePage />} />
            <Route path="/board/club" element={<NoticePage />} />
            <Route path="/board/idea" element={<NoticePage />} />
            <Route path="/board/free" element={<NoticePage />} />
            <Route path="/board/photo" element={<NoticePage />} />

            <Route path="/approval" element={<ApprovalPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
