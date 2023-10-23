import type { GetJob } from 'api/getJob/getJob';

import { axios } from '../../axios/axios';

export const QUERY_KEY_GET_JOBS = 'getJobs';

export type GetJobsReponse = GetJob[];

export type GetJobsKeys = keyof GetJob;

export const getJobs = async () => {
  const { data } = await axios.get<GetJobsReponse>('/jobs');
  return data;
};
