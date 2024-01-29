import axios, { AxiosError, AxiosResponse } from 'axios';
import { COOKIE_KEYS } from '@constants/keys';
import ERROR_CODE from '@constants/error';
import { getCookie, removeCookie } from '@utils/cookie';
import BASE_URL from '../config';

// error 형태, 이는 백엔드의 상황을 보고 변경
export interface IError {
  code: string;
  path: string;
  reason: string;
  status: number;
  statusCode: string;
  success: boolean;
  timestamp: string;
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  return config;
});

interface AccessToken {
  accessToken: string;
}

interface AccessTokenRefresh {
  data: AccessToken;
}

async function reissue() {
  const refresh = getCookie(COOKIE_KEYS.REFRESH_KEY);

  const response = await axiosInstance.get<AccessTokenRefresh>('/api/auth/refresh', {
    headers: {
      'Authorization-refresh': `Bearer ${refresh}`,
    },
  });

  // 헤더에 access token 자동으로 설정
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.data.accessToken}`;

  // 끊겼던 요청들을 재처리하기위해 access token return
  return response.data.data.accessToken;
}

const getAxiosError = (error: AxiosError): AxiosResponse<IError, any> | undefined => {
  const serverError = error as AxiosError<IError>;
  return serverError.response;
};

let isAlreadyFetchingAccessToken = false;
const subscribers: Array<(token: string) => void> = [];

// 401로 에러난 함수들을 추가하는 함수
const addSubscriber = (callback: (token: string) => void) => {
  subscribers.push(callback);
};

// 액세스 토큰을 정상적으로 들고와서 원 요청을 실행
const onAccessTokenFetched = (token: string) => {
  subscribers.forEach((callback) => callback(token));
  subscribers.splice(0);
};

// 인증 에러시 로그아웃 시킴
const removeRefreshAndSignOut = () => {
  removeCookie(COOKIE_KEYS.REFRESH_KEY);
  removeCookie(COOKIE_KEYS.IS_LOGIN);
  window.location.href = '/login';
};

let retryCount = 0;
const MAX_RETRY = 2; // 최대 재시도 횟수

const resetTokenAndReattemptRequest = async (error: AxiosResponse<IError, any>) => {
  try {
    if (retryCount >= MAX_RETRY) {
      // 최대 재시도 횟수를 초과하면 에러 처리
      removeRefreshAndSignOut();
      return Promise.reject(new Error('Exceeded maximum retry attempts'));
    }

    const retryOriginRequest = new Promise((resolve, reject) => {
      addSubscriber(async (token: string) => {
        try {
          // eslint-disable-next-line no-param-reassign
          error.config.headers.Authorization = `Bearer ${token}`;
          resolve(axiosInstance(error.config));
        } catch (err) {
          reject(err);
        }
      });
    });

    if (!isAlreadyFetchingAccessToken) {
      // race condition
      isAlreadyFetchingAccessToken = true;
      const access = await reissue();
      isAlreadyFetchingAccessToken = false;

      onAccessTokenFetched(access);
    }

    // eslint-disable-next-line no-plusplus
    retryCount++; // 재시도 횟수 증가

    return retryOriginRequest;
  } catch (newError) {
    removeRefreshAndSignOut();
    return Promise.reject(newError);
  }
};

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const axiosError = getAxiosError(error as AxiosError);

    // 401에러 시 리프레시를 사용해서 토큰 발급 뒤 다시 요청
    if (axiosError?.data.code === ERROR_CODE.ACCESS_EXPIRED) {
      return resetTokenAndReattemptRequest(axiosError);
    }

    // 리프레시 만료 시 로그아웃 처리
    if (axiosError?.data.code === ERROR_CODE.REFRESH_EXPIRED) {
      removeRefreshAndSignOut();
      return Promise.reject(axiosError);
    }

    return Promise.reject(error);
  },
);
