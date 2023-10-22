import { useState, useCallback, type ChangeEvent } from 'react';
import Fuse from 'fuse.js';

import { columns } from 'view/jobs/columns';

export const useSearch = <T extends any[]>(data: T) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  }, []);

  const searchData = useCallback(() => {
    if (value) {
      const fuse = new Fuse(data, {
        keys: [...columns],
        threshold: 0.2,
      });
      return fuse.search(value).map(({ item }) => item);
    }
    return undefined;
  }, [value, data]);

  return {
    value,
    handleChange,
    searchData,
  };
};
