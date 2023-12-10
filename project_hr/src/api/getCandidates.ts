import { axios } from '../axios/axios';

export type GetCandidate = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  position: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
};

type GetCandidates = GetCandidate[];

export const QUERY_KEY_CANDIDATES = 'candidates';

export const getCandidates = async () => {
  const { data } = await axios.get<GetCandidates>('/candidates');
  return data;
};
