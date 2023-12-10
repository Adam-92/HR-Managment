export type Job = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
  status: 'OPEN' | 'CLOSED';
};

export type JobResponse = {
  data: Job;
};

export type JobPayload = {
  title: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
};

export type FormatUserName = (user: UserInfo) => string;

type UserInfo = { firstName: string; lastName: string };
