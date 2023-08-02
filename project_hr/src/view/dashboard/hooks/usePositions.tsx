import { useQuery } from '@tanstack/react-query';

import { getPositions, QUERY_KEY_POSITIONS } from 'api/getPositions';

export const usePositions = () => {
  return useQuery({
    queryKey: [QUERY_KEY_POSITIONS],
    queryFn: getPositions,
  });
};
