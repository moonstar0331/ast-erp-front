import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const UserLayout: React.FC = () => {
    const location = useLocation();

    const sidebarLinks = [
        { name: '사용자정보', href: '/user/info' },
        { name: '직원명부', href: '/user/list' },
        { name: '알림', href: '/user/notice' },
        { name: '메시지', href: '/user/msg' },
        { name: '보낸메시지', href: '/user/sentmsg' },
        { name: '그룹관리', href: '/user/group' },
        { name: '태그설정', href: '/user/tag' },
        { name: '즐겨찾기', href: '/user/bookmark' },
    ].map(link => ({
        ...link,
        active: location.pathname === link.href
    }));

    return (
        <SidebarLayout sidebarTitle="Info" sidebarLinks={sidebarLinks}>
            <Outlet />
        </SidebarLayout>
    );
};

export default UserLayout;
