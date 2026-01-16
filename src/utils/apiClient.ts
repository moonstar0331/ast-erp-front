import axios from 'axios';

// 상태 코드 → 기본 에러 메시지 매핑
const codeMessage: Record<number, string> = {
  200: 'Request succeeded.',
  201: 'Created/modified successfully.',
  204: 'Deleted successfully.',
  400: 'Bad request.',
  401: 'Unauthorized.',
  403: 'Forbidden.',
  404: 'Not found.',
  500: 'Internal server error.',
  502: 'Bad gateway.',
  503: 'Service unavailable.',
  504: 'Gateway timeout.',
};

const apiClient = axios.create({
  baseURL: '/', // vite.config.ts proxy 기준
  withCredentials: true,
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => response.data, // 호출부에서 data만 접근
  (error) => {
    if (error.response) {
      const { status, config } = error.response;
      const errorText = codeMessage[status] || error.response.statusText;

      // status 값에 따른 에러 및 redirect 처리
      if (status === 401) {
        console.error('Unauthorized: session expired. Redirecting…');
        // window.location.href = '/';
      } else if (status === 403) {
        console.error('Forbidden: no permission for this resource.');
        // window.location.href = '/';
      } else if (status >= 500) {
        console.error('Server Error: an unexpected error occurred.');
      } else {
        console.error(`Request Error ${status}: ${config.url}`, errorText);
      }
    } else {
      console.error('Network Error: Cannot connect to server.');
    }

    return Promise.reject(error);
  },
);

export default apiClient;
