export const Routes = {
  home: '/',
  dashboard: '/dashboard',
  signup: '/signup',
  signin: '/signin',
  jobs: '/jobs',
  addJob: '/jobs/add',
  editJob: '/jobs/edit',
  candidates: '/candidates',
  addCandidate: '/candidates/add',
  editCandidate: '/candidates/edit',
  blacklistCandidates: '/candidates/blacklist',
  meetings: '/meetings',
  profile: '/profile',
} as const;

export const getSingleJobUrl = (jobId: string) => `${Routes.jobs}/${jobId}`;
export const editSingleJobUrl = (jobId: string) => `${Routes.editJob}/${jobId}`;

export const getSingleCandidateUrl = (candidateId: string) =>
  `${Routes.candidates}/${candidateId}`;
export const editSingleCandidateUrl = (candidateId: string) =>
  `${Routes.editCandidate}/${candidateId}`;
