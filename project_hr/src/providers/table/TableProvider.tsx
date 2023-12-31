import { useMemo } from 'react';

import { useCheckboxRow } from 'components/Table/CheckboxRow/useCheckboxRow';
import { usePagination } from 'components/Table/Pagination/usePagination';
import { useSearch } from 'components/Table/Search/useSearch';
import { useSort } from 'components/Table/Sort/useSort';

import { TableContext } from './Context';

type TableProviderProps<T> = {
  data: T;
  columns: readonly string[];
  children: (data: T) => JSX.Element;
};

export const TableProvider = <T extends any[]>({
  data,
  children,
  columns,
}: TableProviderProps<T>) => {
  const rowIds = data.map((row) => row.id);

  const sort = useSort();
  const sortedData = sort.getSortedData(data);

  const search = useSearch([...columns]);
  const searchedData = search.getSearchedData(sortedData);

  const pagination = usePagination(searchedData.length);
  const paginatedData = pagination.getPaginatedData(searchedData);

  const checkboxRow = useCheckboxRow(rowIds);

  const processedData = paginatedData as T;

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
      {children(processedData)}
    </TableContext.Provider>
  );
};
