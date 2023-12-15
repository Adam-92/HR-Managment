import { createContext } from 'react';

import type { UseCheckboxRowProps } from 'components/Table/CheckboxRow/CheckboxRow.types';
import type { UseSearchProps } from 'components/Table/Search/Search.types';
import type { UseSortProps } from 'components/Table/Sort/sort.types';
import type { UseSelectActions } from 'components/Table/SelectActions/SelectActions.types';

import type { UsePaginationProps } from '../../components/Table/Pagination/Pagination.types';

type TableContexValue = {
  pagination: UsePaginationProps;
  checkboxRow: UseCheckboxRowProps;
  search: UseSearchProps;
  sort: UseSortProps;
  selectActions: UseSelectActions;
};

export const TableContext = createContext<TableContexValue | undefined>(
  undefined,
);
