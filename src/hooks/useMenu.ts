import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { type MenuItem } from '@/api/menu';
import type { SidebarLink } from '@/types';
import { useMenuContext } from '@/context/MenuContext';

export function useMenu() {
    const location = useLocation();
    const { menuTree } = useMenuContext();

    const menuData = useMemo(() => {
        if (!menuTree || menuTree.length === 0) {
            return { currentRootMenu: null, currentSubMenu: null };
        }

        // 모든 메뉴 항목을 평탄화하여 검색하기 쉽게 만듦
        const allItems: MenuItem[] = [];
        const flatten = (items: MenuItem[]) => {
            items.forEach(item => {
                allItems.push(item);
                if (item.children && item.children.length > 0) {
                    flatten(item.children);
                }
            });
        };
        flatten(menuTree);

        // 1. 현재 경로와 가장 잘 일치하는 메뉴 항목 찾기
        const currentSubMenu = allItems.find(item => item.path === location.pathname) ||
                            allItems
                                .filter(item => item.path && location.pathname.startsWith(item.path))
                                .sort((a, b) => (b.path?.length || 0) - (a.path?.length || 0))[0] || null;

        let currentRootMenu: MenuItem | null = null;
        if (currentSubMenu) {
            // 2. parentMenuId를 추적하여 최상위 메뉴를 찾습니다.
            let root = currentSubMenu;
            while (root.parentMenuId !== null) {
                const parent = allItems.find(p => p.menuId === root.parentMenuId);
                if (!parent) break;
                root = parent;
            }
            currentRootMenu = root;
        }

        return { currentRootMenu, currentSubMenu };
    }, [location.pathname, menuTree]);

    const { currentRootMenu, currentSubMenu } = menuData;

    const sidebarLinks: SidebarLink[] = useMemo(() => {
        return currentRootMenu?.children?.map(child => ({
            name: child.menuName,
            href: child.path || '#',
            active: location.pathname === child.path
        })) || [];
    }, [currentRootMenu, location.pathname]);

    return {
        menuTree,
        currentRootMenu,
        currentSubMenu,
        menuCode: currentRootMenu?.menuCode || '',
        sidebarTitle: currentRootMenu?.menuName || '',
        sidebarLinks,
        subMenuName: currentSubMenu?.menuName || ''
    };
}
