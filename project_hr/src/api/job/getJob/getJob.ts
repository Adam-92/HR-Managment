import type { Job } from '@types/types';

import { axios } from '../../../axios/axios';

export const QUERY_KEY_GET_JOB = 'getJob';

export const getJob = async (id: string) => {
  const { data } = await axios.get<Job>(`/jobs/${id}`);
  return data;
};
