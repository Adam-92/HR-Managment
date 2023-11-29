import type { Tokens } from 'axios/axios.types';

import { axios } from '../../axios/axios';

export type SignInPayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export const logIn = async (payload: SignInPayload) => {
  return axios.post<Tokens>('auth/login', payload);
};
