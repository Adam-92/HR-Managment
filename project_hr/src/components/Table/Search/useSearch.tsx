import { useState, useCallback, useEffect, type ChangeEvent } from 'react';
import Fuse from 'fuse.js';

import { columns } from 'view/jobs/columns';

export const useSearch = <T extends any[]>(data: T) => {
  const [value, setValue] = useState('');
  const [debouncedData, setDebouncedData] = useState<T[]>([]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as string;
    setValue(newValue);
  }, []);

  const searchData = useCallback(() => {
    const fuse = new Fuse(data, {
      keys: [...columns],
      threshold: 0.2,
    });
    return fuse.search(value).map(({ item }) => item);
  }, [value, data]);

  useEffect(() => {
    const getData = setTimeout(() => {
      const result = searchData();
      setDebouncedData(result);
    }, 300);
    return () => clearTimeout(getData);
  }, [searchData, value]);

  return {
    value,
    handleChange,
    debouncedData,
  };
};
