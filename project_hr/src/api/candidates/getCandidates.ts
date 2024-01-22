import type { Candidate } from 'types/types';

import { axios } from '../../axios/axios';

export const QUERY_KEY_GET_CANDIDATES = 'getCandidates';

export const getCandidates = async () => {
  const { data } = await axios.get<Candidate[]>('/candidates');
  return data;
};
