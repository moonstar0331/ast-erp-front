import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import type { SidebarLink } from '../types';

type SidebarLayoutProps = {
    children: ReactNode;
    sidebarTitle: string;
    sidebarLinks: SidebarLink[];
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, sidebarTitle, sidebarLinks }) => {
    return (
        <div className="flex flex-row gap-6 w-full">
            <Sidebar title={sidebarTitle} links={sidebarLinks} />
            <div className="flex-1 bg-white p-6 rounded-lg border">
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;
