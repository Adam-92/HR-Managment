import type { Job, JobPayload } from 'types/types';

import { axios } from '../../../axios/axios';

export const addJob = async (payload: JobPayload) => {
  return axios.post<Job>('/jobs', payload);
};
