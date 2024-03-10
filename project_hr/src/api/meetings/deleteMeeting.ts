import { axios } from '../../axios/axios';

export type PayloadMeetingDetails = {
  id: string;
};

export const deleteMeeting = async (payload: PayloadMeetingDetails) =>
  axios.delete(`/meetings/${payload.id}`);
