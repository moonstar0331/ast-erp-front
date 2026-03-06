import apiClient from '@/utils/apiClient';
import { SERVICE_API } from './constants';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userUuid: string;
  msg?: string;
}

//로그인
export async function login(loginId: string, password: string): Promise<LoginResponse> {
  const res = await apiClient.post(
    `${SERVICE_API.AUTH}/api/login`,
    {
      loginId,
      password,
    },
    {
      withCredentials: true,
    },
  );

  if (!res) {
    throw new Error((res as any)?.msg || '로그인에 실패했습니다.');
  }

  return res as unknown as LoginResponse;
}

export interface UserInfo {
  userUuid: string;
  loginId: string;
  email: string;
  name: string;
  deptName?: string;
  positionName?: string;
  phone?: string;
}

// 사용자 정보 조회
export async function getUserInfo(userUuid: string): Promise<UserInfo> {
  const res = await apiClient.get(`${SERVICE_API.AUTH}/api/users/${userUuid}`);
  return res as unknown as UserInfo;
}

// 사용자 목록 조회
export async function getUsers(): Promise<UserInfo[]> {
  const res = await apiClient.get(`${SERVICE_API.AUTH}/api/users`);
  return res as unknown as UserInfo[];
}