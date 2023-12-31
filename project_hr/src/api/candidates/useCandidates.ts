import { useQuery } from '@tanstack/react-query';

import { getCandidates, QUERY_KEY_GET_CANDIDATES } from './getCandidates';

export const useCandidates = () =>
  useQuery([QUERY_KEY_GET_CANDIDATES], getCandidates);
