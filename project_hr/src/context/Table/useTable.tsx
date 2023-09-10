import { useContext } from 'react';

import { TableContext } from './context';

export const useTable = () => {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw Error('useTable can be use only inside TableProvider');
  }
  return ctx;
};
