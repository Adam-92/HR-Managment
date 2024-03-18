import type { Job } from '../../../types/types';
import { axios } from '../../../axios/axios';

export type EditJob = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  companyName: string;
};

export const editJob = async (payload: EditJob) => {
  return axios.patch<Job>(`jobs/${payload.id}`, payload);
};
