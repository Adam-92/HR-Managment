import { axios } from '../../axios/axios';

export const QUERY_KEY_USER = 'getUser';

export type GetUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const getUser = async () => {
  const { data } = await axios.get<GetUser>('users/me');
  return data;
};
