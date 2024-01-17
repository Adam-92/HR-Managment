import type { Candidate, CandidatePayload } from '@types/types';

import { axios } from '../../../axios/axios';

export const addCandidate = async (payload: CandidatePayload) => {
  return axios.post<Candidate>('/candidates', payload);
};
