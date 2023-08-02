import type { GetUserDataResponse } from 'types/types';

import { axios } from '../../axios/axios';

export const QUERY_KEY_USER = 'getUser';

export const getUser = async () => {
  const { data } = await axios.get<GetUserDataResponse>('users/me');
  return data;
};
