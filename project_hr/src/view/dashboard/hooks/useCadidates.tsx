import { useQuery } from '@tanstack/react-query';

import { getCandidates, QUERY_KEY_CANDIDATES } from 'api/getCandidates';

export const useCandidates = () => {
  return useQuery({
    queryKey: [QUERY_KEY_CANDIDATES],
    queryFn: getCandidates,
  });
};
