import { axios } from '../../axios/axios';

export type GetJob = {
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

export const QUERY_KEY_GET_JOB = 'getJob';

export const getJob = async (id: string) => {
  const { data } = await axios.get<GetJob>(`/jobs/${id}`);
  return data;
};
