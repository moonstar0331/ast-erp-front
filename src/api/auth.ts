import apiClient from '@/utils/apiClient';

//로그인
export async function login(email: string, password: string) {
  const res = await apiClient.post(
    `/api/auth-service/api/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );

  if (!res) {
    throw new Error(res.msg || '로그인에 실패했습니다.');
  }

  return res;
}