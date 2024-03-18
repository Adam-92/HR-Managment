export type Job = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  companyName: string;
  status: 'OPEN' | 'CLOSED';
};

export type AutocompleteData = {
  label: string;
  id: string;
}[];

export type JobResponse = {
  data: Job;
};

export type JobPayload = {
  title: string;
  shortDescription: string;
  longDescription: string;
  companyName: string;
};

export type Candidate = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  position: string;
  shortDescription: string;
  longDescription: string;
  companyName: string;
};

export type CandidatePayload = {
  name: string;
  position: string;
  shortDescription: string;
  longDescription: string;
  companyName: string;
};

export type CandidateResponse = {
  data: Candidate;
};

export type FormatUserName = (user: UserInfo) => string;

type UserInfo = { firstName: string; lastName: string };
