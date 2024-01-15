/* eslint-disable no-param-reassign */
import axios, { AxiosError } from 'axios';
import { NON_TOKEN_API } from '@constants/token';
import { TOKEN_KEYS } from '@constants/keys';
import BASE_URL from '../config';

// error 형태, 이는 백엔드의 상황을 보고 변경
export interface IError {
  status: number;
  code: string;
  reason: string;
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  const token = localStorage.getItem(TOKEN_KEYS.ACCESS_KEY);

  if (token !== null && !NON_TOKEN_API.includes(config.url as string)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

const getAxiosError = (error: AxiosError): IError | undefined => {
  const serverError = error as AxiosError<IError>;
  return serverError.response?.data;
};

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const axiosError = getAxiosError(error as AxiosError);
    alert(axiosError?.reason);
    return Promise.reject(error);
  },
);
