import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY_USER, getUser } from './getUser';

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEY_USER],
    queryFn: getUser,
    retry: 1,
  });
};
