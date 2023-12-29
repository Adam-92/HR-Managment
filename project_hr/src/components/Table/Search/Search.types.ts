import type { ChangeEvent } from 'react';

export type UseSearchProps = {
  value: string;
  clearValue: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncedSearch: (data: unknown[]) => void;
};
