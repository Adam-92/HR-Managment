import { axios } from '../../axios/axios';

export const QUERY_KEY_GET_JOBS = 'getJobs';

export type GetJobs = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
  status: 'OPEN' | 'CLOSED';
};

export type GetJobsReponse = GetJobs[];

export const getJobs = async () => {
  const { data } = await axios.get<GetJobsReponse>('/jobs');
  return data;
};
