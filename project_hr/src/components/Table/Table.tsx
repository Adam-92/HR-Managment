import { Table as MuiTable } from '@mui/material';

type TableProps<T> = {
  data: T;
  rowRender: (data: T) => JSX.Element;
};

export const Table = <T extends any[]>({ data, rowRender }: TableProps<T>) => {
  return <MuiTable>{rowRender(data)}</MuiTable>;
};
