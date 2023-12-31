import { useState, useCallback, type ChangeEvent } from 'react';
import Fuse from 'fuse.js';

import { useDebounce } from './useDebounce';

export const useSearch = (columns: string[]) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as string;
    setValue(newValue);
  }, []);

  const getSearchedData = useCallback(
    (data: unknown[]) => {
      if (!debouncedValue) return data;
      const fuse = new Fuse(data, {
        keys: columns,
        threshold: 0.2,
      });
      return fuse.search(debouncedValue).map(({ item }) => item);
    },
    [debouncedValue, columns],
  );

  const clearValue = useCallback(() => setValue(''), []);

  return {
    value,
    clearValue,
    handleChange,
    getSearchedData,
  };
};
