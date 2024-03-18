export const typeOfMeetingOptions = ['online', 'offline'] as const;

export type TypeOfMeetingValue = (typeof typeOfMeetingOptions)[number];
