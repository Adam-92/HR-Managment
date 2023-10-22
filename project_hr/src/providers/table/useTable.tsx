import { useContext } from 'react';

import { TableContext } from './Context';

export const useTable = () => {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw Error('useTable hook can be use only inside TableProvider');
  }
  return ctx;
};
