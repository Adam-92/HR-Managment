export type UseCheckboxRowProps = {
  onChangeAllRows: () => void;
  markSingleRow: (id: string) => void;
  unmarkSingleRow: (id: string) => void;
  unmarkMasterCheckbox: () => void;
  unmarkAllRows: () => void;
  rowIsInsideMarkedRows: (id: string) => string | undefined;
  markedRows: string[];
  isMarkMasterCheckbox: boolean;
  someRowsAreMarked: boolean;
};
