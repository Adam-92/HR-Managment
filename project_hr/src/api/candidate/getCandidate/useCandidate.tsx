import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY_GET_CANDIDATE, getCandidate } from './getCandidate';

export const useCandidate = (id: string) =>
  useQuery([QUERY_KEY_GET_CANDIDATE], () => getCandidate(id), { cacheTime: 0 });
