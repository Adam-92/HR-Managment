import type { Candidate } from '../../../types/types';
import { axios } from '../../../axios/axios';

export const QUERY_KEY_GET_CANDIDATE = 'getCandidate';

export const getCandidate = async (id: string) => {
  const { data } = await axios.get<Candidate>(`candidates/${id}`);
  return data;
};
