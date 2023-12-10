import { axios } from '../../axios/axios';

export type ResetPasswordPayload = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

export const resetPassword = (payload: ResetPasswordPayload) => {
  return axios.post('/auth/change-password', payload);
};
