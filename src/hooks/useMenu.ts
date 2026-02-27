import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMenuTree, type MenuItem } from '@/api/menu';
import type { SidebarLink } from '@/types';

export function useMenu() {
    const location = useLocation();
    const [menuTree, setMenuTree] = useState<MenuItem[]>([]);
    const [currentRootMenu, setCurrentRootMenu] = useState<MenuItem | null>(null);
    const [currentSubMenu, setCurrentSubMenu] = useState<MenuItem | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const tree = await getMenuTree();
                setMenuTree(tree);

                // Find the matching menu item and its root parent
                for (const root of tree) {
                    if (root.path && location.pathname.startsWith(root.path)) {
                        setCurrentRootMenu(root);
                        if (location.pathname === root.path) {
                            setCurrentSubMenu(root);
                        } else if (root.children) {
                            const sub = root.children.find(child => child.path && location.pathname === child.path);
                            if (sub) setCurrentSubMenu(sub);
                        }
                        break;
                    }
                    if (root.children) {
                        const sub = root.children.find(child => child.path && location.pathname.startsWith(child.path));
                        if (sub) {
                            setCurrentRootMenu(root);
                            setCurrentSubMenu(sub);
                            break;
                        }
                    }
                }
            } catch (error) {
                console.error('Failed to fetch menu:', error);
            }
        };

        fetchMenu();
    }, [location.pathname]);

    const sidebarLinks: SidebarLink[] = currentRootMenu?.children?.map(child => ({
        name: child.menuName,
        href: child.path || '#',
        active: location.pathname === child.path
    })) || [];

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
