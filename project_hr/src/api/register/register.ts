import { axios } from '../../axios/axios';

export type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword?: string;
};

export const register = (payload: SignUpPayload) => {
  return axios.post('auth/register', payload);
};
