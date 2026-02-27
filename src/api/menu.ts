import apiClient from '@/utils/apiClient';
import { SERVICE_API } from './constants';

export interface MenuItem {
  menuId: number;
  parentMenuId: number | null;
  menuName: string;
  menuCode: string;
  menuTypeCode: string;
  path: string | null;
  children: MenuItem[];
}

export async function getMenuTree(): Promise<MenuItem[]> {
  const res = await apiClient.get(`${SERVICE_API.COMMON}/api/menu/tree`);
  return res as unknown as MenuItem[];
}
