import { useState } from 'react';

type SortDirection = 'asc' | 'desc';

export const useTable = (data) => {
  const [orderBy, setOrderBy] = useState('');
  const [orderDirection, setOrderDirection] = useState<SortDirection>('desc');

  const handleOrderBy = (parameter: string) => setOrderBy(parameter);

  return {
    handleOrderBy,
  };
};
