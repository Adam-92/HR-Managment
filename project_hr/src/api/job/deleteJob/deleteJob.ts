import { axios } from '../../../axios/axios';

export const deleteJob = async (id: string) => {
  const { data } = await axios.delete(`jobs/${id}`);
  return data;
};
