import { Box, Table as MuiTable } from '@mui/material';

import type { CandidateColumnsType } from 'view/candidates/columns';
import type { JobColumnsType } from 'view/jobs/columns';

import { Pagination } from './Pagination/Pagination';
import { SelectRowsPerPage } from './Pagination/SelectRowsPerPage';
import { Search } from './Search/Search';
import { SelectActions } from './SelectActions/SelectActions';
import { flexBox } from './style';

export type DataCategory = 'candidates' | 'jobs';

type ColumnsType = {
  jobs: JobColumnsType;
  candidates: CandidateColumnsType;
};

export type TableProps<T, Category extends DataCategory> = {
  data: T;
  dataCategory: Category;
  columns: ColumnsType[Category];
  columnsRenderer: (props: { columns: ColumnsType[Category] }) => JSX.Element;
  rowsRenderer: (props: { data: T }) => JSX.Element;
};

export const Table = <T extends any[], Category extends DataCategory>({
  data,
  columns,
  dataCategory,
  columnsRenderer: ColumnsRenderer,
  rowsRenderer: RowsRenderer,
}: TableProps<T, Category>) => {
  return (
    <>
      <Box sx={flexBox}>
        <SelectActions dataCategory={dataCategory} />
        <SelectRowsPerPage />
        <Search />
      </Box>
      <MuiTable>
        <ColumnsRenderer columns={columns} />
        <RowsRenderer data={data} />
      </MuiTable>
      <Pagination />
    </>
  );
};
