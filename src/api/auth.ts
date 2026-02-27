import apiClient from '@/utils/apiClient';
import { SERVICE_API } from './constants';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userUuid: string;
  msg?: string;
}

//로그인
export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await apiClient.post(
    `${SERVICE_API.AUTH}/api/login`,
    {
      email,
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