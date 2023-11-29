export const Routes = {
  home: '/',
  signup: '/signup',
  signin: '/signin',
  dashboard: '/dashboard',
  jobs: '/jobs',
  addJob: '/jobs/add',
  editJob: '/jobs/edit',
  candidates: '/candidates',
  calendar: '/calendar',
  profile: '/profile',
} as const;

export const getSingleJobUrl = (jobId: string) => `${Routes.jobs}/${jobId}`;
export const getEditJobUrl = (jobId: string) => `${Routes.editJob}/${jobId}`;
