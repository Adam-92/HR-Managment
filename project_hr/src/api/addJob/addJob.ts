import type { GetJob } from 'api/getJob/getJob';

import { axios } from '../../axios/axios';

export type AddJobPayload = {
  title: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
};

export type AddJobResponse = {
  data: GetJob;
};

export const addJob = async (payload: AddJobPayload) => {
  return axios.post('/jobs', payload);
};
