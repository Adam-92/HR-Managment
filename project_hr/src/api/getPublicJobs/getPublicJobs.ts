import { axios } from '../../axios/axios';

import type { GetPublicJobsResponse } from './getPublicJobs.types';

export const QUERY_KEY_GET_PUBLIC_JOBS = 'getPublicJobs';

export const getPublicJobs = async () => {
  const { data } = await axios.get<GetPublicJobsResponse>('jobs/public');
  return data;
};
