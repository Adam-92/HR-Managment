import { Table as MuiTable } from '@mui/material';

type TableProps<T> = {
  data: T;
  columns: string[];
  displayColumns: (props: { columns: string[] }) => JSX.Element;
  displayRows: (props: { data: T }) => JSX.Element;
};

export const Table = <T extends any[]>({
  data,
  columns,
  displayColumns: DisplayColumns,
  displayRows: DisplayRows,
}: TableProps<T>) => {
  return (
    <MuiTable>
      <DisplayColumns columns={columns} />
      <DisplayRows data={data} />
    </MuiTable>
  );
};
