import type { Candidate, Job } from 'types/types';
import { takeCurrentDate } from 'utils/takeCurrentDate';

import { axios } from '../../axios/axios';

export const QUERY_KEY_GET_MEETINGS = 'getMeetings';

export type MeetingsData = {
  candidate: Candidate;
  createdAt: string;
  updatedAt: string;
  date: string;
  id: string;
  job: Job;
  place: string;
  type: 'offilne' | 'online';
};

export type ParamsMeetings = {
  month: string;
  year: string;
  day: string;
};

export const defaultMeetingsParam = {
  month: takeCurrentDate().month.toString(),
  year: takeCurrentDate().year.toString(),
  day: takeCurrentDate().day.toString(),
};

export const getMeetings = async (params: ParamsMeetings) => {
  const { data } = await axios.get<MeetingsData[]>(
    `/meetings?month=${params.month}&year=${params.year}`,
  );
  return data;
};
