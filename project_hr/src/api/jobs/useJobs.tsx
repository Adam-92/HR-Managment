import { useQuery } from '@tanstack/react-query';

import { getJobs, QUERY_KEY_GET_JOBS } from './getJobs';

export const useJobs = () => useQuery([QUERY_KEY_GET_JOBS], getJobs);
