import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import NoticePage from './pages/board/NoticePage.tsx';
import './tailwind.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
    </>
  );
}

export default App;
