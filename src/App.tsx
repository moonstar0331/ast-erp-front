import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import './tailwind.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
