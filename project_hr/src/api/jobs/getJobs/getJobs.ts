import type { Job } from 'types/types';

import { axios } from '../../../axios/axios';

export const QUERY_KEY_GET_JOBS = 'getJobs';

export type GetJobsReponse = Job[];

export type GetJobsKeys = keyof Job;

export const getJobs = async () => {
  const { data } = await axios.get<GetJobsReponse>('/jobs');
  return data;
};
