import {
  useState,
  useCallback,
  useMemo,
  type ChangeEvent,
  useEffect,
} from 'react';
import _debounce from 'lodash/debounce';
import Fuse from 'fuse.js';

export const useSearch = (columns: string[]) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as string;
    setValue(newValue);
  }, []);

  const searchData = useCallback(
    (data: unknown[]) => {
      if (!value) return data;
      const fuse = new Fuse(data, {
        keys: columns,
        threshold: 0.2,
      });
      return fuse.search(value).map(({ item }) => {
        console.log('🚀  item:', item);
        return item;
      });
    },
    [value, columns],
  );

  const debouncedSearch = useMemo(
    () => _debounce((data: unknown[]) => searchData(data), 3000),
    [searchData],
  );

  const clearValue = useCallback(() => setValue(''), []);

  return {
    value,
    clearValue,
    handleChange,
    debouncedSearch,
  };
};
