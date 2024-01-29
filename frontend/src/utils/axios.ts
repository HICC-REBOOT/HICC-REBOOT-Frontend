/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { AxiosError, AxiosResponse } from 'axios';
import { COOKIE_KEYS } from '@constants/keys';
import reissue from '@auth/reissue';
import { removeCookie } from './cookie';
import axiosInstance from './axiosInstance';

// error 형태, 이는 백엔드의 상황을 보고 변경
export interface IError {
  status: number;
  code: string;
  reason: string;
}

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  return config;
});

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
  window.location.href = '/login';
};

const resetTokenAndReattemptRequest = async (error: AxiosResponse<IError, any>) => {
  try {
    const retryOriginRequest = new Promise((resolve, reject) => {
      addSubscriber(async (token: string) => {
        try {
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
    if (axiosError?.data.status === 401) {
      return resetTokenAndReattemptRequest(axiosError);
    }

    return Promise.reject(error);
  },
);
