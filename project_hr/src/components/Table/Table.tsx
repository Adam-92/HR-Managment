import { Table as MuiTable } from '@mui/material';

import type { CandidateColumnsType } from 'view/candidates/columns';
import type { JobColumnsType } from 'view/jobs/columns';

import { Pagination } from './Pagination/Pagination';

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
  columnsRenderer: ColumnsRenderer,
  rowsRenderer: RowsRenderer,
}: TableProps<T, Category>) => {
  return (
    <>
      <MuiTable sx={{ mt: 1 }}>
        <ColumnsRenderer columns={columns} />
        <RowsRenderer data={data} />
      </MuiTable>
      <Pagination />
    </>
  );
};
