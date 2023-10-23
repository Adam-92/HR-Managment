import _axios, { type InternalAxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { tokenStorage } from 'class/tokenStorageClass';

import { tokensRotationRequest } from './tokenRotationRequest';

export const axios = _axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://localhost:9595',
});

const requestSuccessInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessTokenObject = tokenStorage.getAccessToken();
  if (accessTokenObject) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessTokenObject.accessToken}`;
  }

  return config;
};

axios.interceptors.request.use(requestSuccessInterceptor);

// avoid circular dependency by injecting axios
createAuthRefreshInterceptor(axios, tokensRotationRequest(axios));
