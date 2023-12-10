import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY_GET_JOB, getJob } from './getJob';

export const useJob = (id: string) =>
  useQuery([QUERY_KEY_GET_JOB], () => getJob(id), { cacheTime: 0 });
