import type { Candidate } from '../../../types/types';
import { axios } from '../../../axios/axios';

export type EditCandidate = {
  id: string;
  name: string;
  position: string;
  shortDescription: string;
  longDescription: string;
  companyName: string;
};

export const editCandidate = async (payload: EditCandidate) => {
  return axios.patch<Candidate>(`candidates/${payload.id}`, payload);
};
