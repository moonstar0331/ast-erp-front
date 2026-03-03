import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getMenuTree, type MenuItem } from '@/api/menu';
import { getCookie } from '@/utils/cookie';

interface MenuContextType {
  menuTree: MenuItem[];
  loading: boolean;
  error: Error | null;
  refreshMenu: () => Promise<void>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuTree, setMenuTree] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMenu = async () => {
    const token = getCookie('accessToken');
    if (!token) {
      setMenuTree([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await getMenuTree();
      setMenuTree(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch menu'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menuTree, loading, error, refreshMenu: fetchMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};
