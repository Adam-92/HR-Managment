import { useMemo } from 'react';

import { useCheckboxRow } from 'components/Table/CheckboxRow/useCheckboxRow';
import { usePagination } from 'components/Table/Pagination/usePagination';
import { useSearch } from 'components/Table/Search/useSearch';
import { useSort } from 'components/Table/Sort/useSort';

import { TableContext } from './Context';

type TableProviderProps<T> = {
  data: T;
  children: (data: T) => JSX.Element;
};

export const TableProvider = <T extends any[]>({
  data,
  children,
}: TableProviderProps<T>) => {
  const pagination = usePagination(data);
  const search = useSearch(data);
  const sort = useSort(data);
  const checkboxRow = useCheckboxRow(sort.sortedData);

  const value = useMemo(
    () => ({
      pagination,
      search,
      sort,
      checkboxRow,
    }),
    [pagination, search, sort, checkboxRow],
  );

  return (
    <TableContext.Provider value={value}>
      {children(sort.sortedData)}
    </TableContext.Provider>
  );
};
