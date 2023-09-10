import { createContext } from 'react';

export type TableValue = {
  markedRows: string[];
  isMarkAllRows: boolean;
  markAllRows: () => void;
  markSingleRow: (id: string) => void;
  unmarkSingleRow: (id: string) => void;
  rowIsInsideMarkedRows: (id: string) => string | undefined;
};

export const TableContext = createContext<TableValue | undefined>(undefined);
