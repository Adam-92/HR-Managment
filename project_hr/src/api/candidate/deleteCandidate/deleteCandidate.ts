import { axios } from '../../../axios/axios';

export const deleteCandidate = async (id: string) =>
  axios.delete(`candidates/${id}`);
