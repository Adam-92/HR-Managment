export type UseCheckboxRowProps = {
  unmarkAllRows: () => void;
  onChangeAllRows: () => void;
  markSingleRow: (id: string) => void;
  unmarkSingleRow: (id: string) => void;
  rowIsInsideMarkedRows: (id: string) => string | undefined;
  isMarkAllRows: boolean;
  someRowsAreMarked: boolean;
};
