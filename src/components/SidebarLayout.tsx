import React, { type ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import type { SidebarLink } from '../types';
import { getMenuTree } from '@/api/menu';

type SidebarLayoutProps = {
    children: ReactNode;
    menuCode: string;
    sidebarTitle: string;
    sidebarLinks?: SidebarLink[];
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, menuCode, sidebarTitle, sidebarLinks: initialLinks }) => {
    const [links, setLinks] = useState<SidebarLink[]>(initialLinks || []);
    const [currentMenuName, setCurrentMenuName] = useState(sidebarTitle);
    const location = useLocation();

    useEffect(() => {
        const fetchSubMenus = async () => {
            try {
                const menuTree = await getMenuTree();
                // menuCode와 일치하는 대메뉴 찾기
                const currentRootMenu = menuTree.find(m => m.menuCode === menuCode);
                
                if (currentRootMenu) {
                    setCurrentMenuName(currentRootMenu.menuName);
                    if (currentRootMenu.children && currentRootMenu.children.length > 0) {
                        const mappedLinks: SidebarLink[] = currentRootMenu.children.map(child => ({
                            name: child.menuName,
                            href: child.path || '#',
                            active: location.pathname === child.path
                        }));
                        setLinks(mappedLinks);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch submenus:', error);
            }
        };

        fetchSubMenus();
    }, [menuCode, location.pathname]);

    return (
        <div className="flex flex-row gap-6 w-full">
            <Sidebar title={currentMenuName} links={links} />
            <div className="flex-1 bg-white p-6 rounded-lg border">
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;
