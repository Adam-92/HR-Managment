import type { ChangeEvent } from 'react';

export type UseSearchProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  getSearchedData: (data: unknown[]) => unknown[];
};
