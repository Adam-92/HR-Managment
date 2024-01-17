import type { Job } from '@types/types';

import { axios } from '../../axios/axios';

export const QUERY_KEY_GET_JOBS = 'getJobs';

export const getJobs = async () => {
  const { data } = await axios.get<Job[]>('/jobs');
  return data;
};
