import type { AxiosInstance } from 'axios';

import { tokenStorage } from 'utils/tokenStorageClass';

import type { Tokens } from './axios.types';

export const tokensRotationRequest =
  (axios: AxiosInstance) => async (error: unknown) => {
    const refreshTokenObject = tokenStorage.getRefreshToken();

    if (refreshTokenObject) {
      const { isRememberMe, refreshToken } = refreshTokenObject;

      const { data } = await axios.post<Tokens>('auth/refresh-token', {
        refreshToken,
      });

      tokenStorage.saveAccessToken(data.accessToken, isRememberMe);
      tokenStorage.saveRefreshToken(data.refreshToken, isRememberMe);
      return Promise.resolve();
    }

    return Promise.reject(error);
  };
