export const Routes = {
  home: '/',
  signup: '/signup',
  signin: '/signin',
  dashboard: '/dashboard',
  jobs: '/jobs',
  addJob: '/jobs/add',
  editJob: '/jobs/edit',
  candidates: '/candidates',
  addCandidate: '/candidates/add',
  editCandidate: '/candidates/edit',
  calendar: '/calendar',
  profile: '/profile',
} as const;

export const getSingleJobUrl = (jobId: string) => `${Routes.jobs}/${jobId}`;
export const editSingleJobUrl = (jobId: string) => `${Routes.editJob}/${jobId}`;

export const getSingleCandidateUrl = (candidateId: string) =>
  `${Routes.candidates}/${candidateId}`;
export const editSingleCandidateUrl = (candidateId: string) =>
  `${Routes.editCandidate}/${candidateId}`;
