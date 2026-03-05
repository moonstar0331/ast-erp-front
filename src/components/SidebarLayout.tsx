import React, { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import type { SidebarLink } from '../types';
import { useMenu } from '@/hooks/useMenu';

type SidebarLayoutProps = {
    children: ReactNode;
    menuCode?: string;
    sidebarTitle?: string;
    sidebarLinks?: SidebarLink[];
    sidebarChildren?: ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ 
    children, 
    sidebarTitle: initialSidebarTitle, 
    sidebarLinks: initialLinks,
    sidebarChildren 
}) => {
    const { sidebarTitle, sidebarLinks } = useMenu();

    const currentMenuName = initialSidebarTitle || sidebarTitle;
    const links = initialLinks || sidebarLinks;

    return (
        <div className="flex flex-row gap-6 w-full">
            <Sidebar title={currentMenuName} links={links}>
                {sidebarChildren}
            </Sidebar>
            <div className="flex-1 bg-white p-6 rounded-lg border">
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;