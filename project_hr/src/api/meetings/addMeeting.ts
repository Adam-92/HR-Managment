import { type Dayjs } from 'dayjs';

import { axios } from '../../axios/axios';

export type AddMeeting = {
  candidateId: string;
  jobId: string;
  date: Dayjs | string;
  type: 'offline' | 'online';
  place: string;
};

export const addMeeting = async (payload: AddMeeting) => {
  return axios.post('/meetings', payload);
};
