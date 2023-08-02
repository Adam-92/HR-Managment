import type { Tokens } from 'axios/axios.types';

export type SignInPayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type SignInResponse = {
  data: Tokens;
};
