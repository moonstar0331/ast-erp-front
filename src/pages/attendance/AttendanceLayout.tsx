import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const AttendanceLayout: React.FC = () => {
    const location = useLocation();

    const sidebarLinks = [
        { name: '근무현황', href: '/attendance', icon: '📅' },
        { name: '근태현황', href: '/attendance/status', icon: '👥' },
        { name: '월간현황', href: '/attendance/monthly', icon: '📅' },
    ].map(link => ({
        ...link,
        active: location.pathname === link.href
    }));

    return (
        <SidebarLayout sidebarTitle="근태관리" sidebarLinks={sidebarLinks}>
            <Outlet />
        </SidebarLayout>
    );
};

export default AttendanceLayout;
