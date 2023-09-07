import { Table as MuiTable } from '@mui/material';

export type ControlCheckboxes = {
  isAllCheckboxesSet: boolean;
  handleChangeAllCheckboxes: () => void;
};

type TableProps<T> = {
  data: T;
  controlCheckboxes: ControlCheckboxes;
  columnsRenderer: (props: {
    controlCheckboxes: ControlCheckboxes;
  }) => JSX.Element;
  rowsRenderer: (props: {
    data: T;
    controlCheckboxes: ControlCheckboxes;
  }) => JSX.Element;
};

export const Table = <T extends any[]>({
  data,
  controlCheckboxes,
  columnsRenderer: ColumnsRenderer,
  rowsRenderer: RowsRenderer,
}: TableProps<T>) => {
  return (
    <MuiTable>
      <ColumnsRenderer controlCheckboxes={controlCheckboxes} />
      <RowsRenderer data={data} controlCheckboxes={controlCheckboxes} />
    </MuiTable>
  );
};
