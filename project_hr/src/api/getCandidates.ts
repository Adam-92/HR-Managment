import { axios } from '../axios/axios';

export type GetCandidatesResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  position: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
}[];

export const QUERY_KEY_CANDIDATES = 'candidates';

export const getCandidates = async () => {
  const { data } = await axios.get<GetCandidatesResponse>('/candidates');
  return data;
};
