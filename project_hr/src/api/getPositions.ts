import { axios } from '../axios/axios';

export type Position = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
  status: 'CLOSED' | 'OPEN';
};

export type GetPositionsResponse = Position[];

export const QUERY_KEY_POSITIONS = 'positions';

export const getPositions = async () => {
  const { data } = await axios.get<GetPositionsResponse>('/jobs');
  return data;
};
