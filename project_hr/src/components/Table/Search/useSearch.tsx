import { useState, useCallback, useEffect, type ChangeEvent } from 'react';
import Fuse from 'fuse.js';

import { columns } from 'view/jobs/columns';

export const useSearch = (data: unknown[]) => {
  const [value, setValue] = useState('');
  const [searchedResults, setSearchedResults] = useState<unknown[]>([]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as string;
    setValue(newValue);
  }, []);

  const getSearchedData = useCallback(() => {
    if (!value) return data;
    const fuse = new Fuse(data, {
      keys: [...columns],
      threshold: 0.2,
    });
    return fuse.search(value).map(({ item }) => item);
  }, [value, data]);

  const clearValue = useCallback(() => setValue(''), []);

  useEffect(() => {
    const results = setTimeout(() => {
      const result = getSearchedData();
      setSearchedResults(result);
    }, 300);
    return () => clearTimeout(results);
  }, [getSearchedData, value]);

  return {
    value,
    clearValue,
    handleChange,
    searchedResults,
  };
};
