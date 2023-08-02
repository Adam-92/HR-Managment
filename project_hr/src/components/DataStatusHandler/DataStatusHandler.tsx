import { CircularProgress, Alert } from '@mui/material';

import { parseError } from 'errors/parseError';

type DataStatusHandlerProps<T> = {
  isLoading: boolean;
  error: unknown;
  data?: T;
  children: (data: T) => JSX.Element;
};

export const DataStatusHandler = <T,>({
  isLoading,
  error,
  data,
  children,
}: DataStatusHandlerProps<T>) => {
  if (isLoading) {
    return <CircularProgress />;
  }

  if (!data) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  return children(data);
};
