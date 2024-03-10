import type { MeetingsData } from 'api/meetings/getMeetings';

export const adaptDataToEvents = (data: MeetingsData[]) => {
  return data.map((meeting) => ({
    id: meeting.id,
    title: meeting.candidate.name,
    start: meeting.date,
    allDay: true,
  }));
};
