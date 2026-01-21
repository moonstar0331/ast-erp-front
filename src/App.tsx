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
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/approval" element={<ApprovalPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
