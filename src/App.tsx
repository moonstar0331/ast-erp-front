import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import BoardPage from './pages/board/BoardPage.tsx';
import BoardDetailPage from './pages/board/BoardDetailPage.tsx';
import './tailwind.css';
import ApprovalPage from "@/pages/approval/ApprovalPage.tsx";
import ApprovalSettingPage from "@/pages/approval/ApprovalSettingPage.tsx";
import SchedulePage from "@/pages/schedule/SchedulePage.tsx";
import ReservePage from "@/pages/schedule/ReservePage.tsx";
import GroupPage from "@/pages/schedule/GroupPage.tsx";
import ScheduleLayout from "@/pages/schedule/ScheduleLayout.tsx";
import UserInfoPage from "@/pages/user/UserInfoPage.tsx";
import UserListPage from "@/pages/user/UserListPage.tsx";
import UserNoticePage from "@/pages/user/UserNoticePage.tsx";
import UserMsgPage from "@/pages/user/UserMsgPage.tsx";
import UserSentMsgPage from "@/pages/user/UserSentMsgPage.tsx";
import UserGroupPage from "@/pages/user/UserGroupPage.tsx";
import UserTagPage from "@/pages/user/UserTagPage.tsx";
import UserBookmarkPage from "@/pages/user/UserBookmarkPage.tsx";
import UserLayout from "@/pages/user/UserLayout.tsx";
import Layout from "@/components/Layout.tsx";
import AttendanceLayout from "@/pages/attendance/AttendanceLayout.tsx";
import AttendancePage from "@/pages/attendance/AttendancePage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* 근태관리 관련 중첩 라우팅 */}
            <Route path="/attendance" element={<AttendanceLayout />}>
                <Route index element={<AttendancePage />} />
                <Route path="status" element={<AttendancePage />} />
                <Route path="monthly" element={<AttendancePage />} />
            </Route>

            {/* 사용자 정보 관련 라우팅 */}
            <Route path="/user" element={<UserLayout />}>
                <Route index element={<Navigate to="/user/info" replace />} />
                <Route path="info" element={<UserInfoPage />} />
                <Route path="list" element={<UserListPage />} />
                <Route path="notice" element={<UserNoticePage />} />
                <Route path="msg" element={<UserMsgPage />} />
                <Route path="sentmsg" element={<UserSentMsgPage />} />
                <Route path="group" element={<UserGroupPage />} />
                <Route path="tag" element={<UserTagPage />} />
                <Route path="bookmark" element={<UserBookmarkPage />} />
            </Route>

            {/* 게시판 관련 중첩 라우팅 */}
            <Route path="/board">
                <Route index element={<Navigate to="/board/notice" replace />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>

            {/* 이메일 관련 중첩 라우팅 */}
            <Route path="/email">
                <Route index element={<Navigate to="/email/all" replace />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>

            {/* 일정관리 관련 중첩 라우팅 */}
            <Route path="/schedule" element={<ScheduleLayout />}>
                <Route index element={<Navigate to="/schedule/monthly" replace />} />
                <Route path="monthly" element={<SchedulePage />} />
                <Route path="reserve" element={<ReservePage />} />
                <Route path="group" element={<GroupPage />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>

            {/* 업무관리 관련 중첩 라우팅 */}
            <Route path="/task">
                <Route index element={<Navigate to="/task/status" replace />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>

            {/* 전자결재 관련 중첩 라우팅 */}
            <Route path="/approval">
                <Route index element={<Navigate to="/approval/status" replace />} />
                <Route path="new" element={<BoardPage />} />
                <Route path="new/:postId" element={<BoardDetailPage />} />
                <Route path="status" element={<ApprovalPage />} />
                <Route path="setting" element={<ApprovalSettingPage />} />
            </Route>

            {/* 웹디스크 관련 중첩 라우팅 */}
            <Route path="/disk">
                <Route index element={<Navigate to="/disk/list" replace />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>

            {/* 메모장 관련 중첩 라우팅 */}
            <Route path="/memo">
                <Route index element={<Navigate to="/memo/add" replace />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>
            
            {/* 명함관리 관련 중첩 라우팅 */}
            <Route path="/card">
                <Route index element={<Navigate to="/card/list" replace />} />
                <Route path=":category" element={<BoardPage />} />
                <Route path=":category/:postId" element={<BoardDetailPage />} />
            </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
