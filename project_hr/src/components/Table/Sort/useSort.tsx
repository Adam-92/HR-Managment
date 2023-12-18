/* eslint-disable @typescript-eslint/no-shadow */
import { useSearchParams } from 'react-router-dom';

import type { SortQuery } from './sort.types';

export const useSort = () => {
  const [searchParams] = useSearchParams();
  const [sortParam, desc] = searchParams.get('sort')?.split(':') ?? [];

  const getSortQueryParam = (sortBy: string) => {
    const sortQuery: SortQuery = {};

    if (sortParam !== sortBy) {
      sortQuery.sort = sortBy;
    } else if (sortParam === sortBy && !desc) {
      sortQuery.sort = `${sortBy}:desc`;
    }
    return sortQuery;
  };

  const getSortedData = (data: any[]) => {
    const sortedData = [...data].sort((a, b) => {
      if (sortParam) {
        const orderA = a[sortParam].toLowerCase();
        const orderB = b[sortParam].toLowerCase();

        if (desc) {
          return orderA > orderB ? -1 : 1;
        }
        return orderA > orderB ? 1 : -1;
      }

      return 0;
    });
    return sortedData;
  };

  return {
    getSortedData,
    getSortQueryParam,
  };
};
