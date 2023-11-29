import { axios } from '../../axios/axios';

export type ResetUsernamePayload = {
  firstName: string;
  lastName: string;
};

export const resetUsername = (payload: ResetUsernamePayload) => {
  return axios.put('users/me', payload);
};
