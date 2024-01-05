import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Alert } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';
import { take } from 'lodash';

import { parseError } from 'errors/parseError';
import type { ParamBlacklist } from 'api/blacklist/getBlacklist';
import {
  defaultSearchParams,
  getBlacklist,
  QUERY_KEY_GET_BLACKLIST,
} from 'api/blacklist/getBlacklist';

export const Blacklist = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const skipParam = searchParams.get('skip');
  const takeParam = searchParams.get('take');
  const sortByParam = searchParams.get('sortBy');
  const orderParam = searchParams.get('order');

  const validSkip = skipParam && parseInt(skipParam, 10) >= 0;
  const validTake =
    takeParam && parseInt(takeParam, 10) <= 20 && parseInt(takeParam, 10) >= 5;

  const validSortBy =
    (sortByParam && sortByParam === 'name') || sortByParam === 'reason';

  const validOrder =
    (orderParam && orderParam === 'asc') || orderParam === 'desc';

  const checkAllParams = validSkip && validTake && validSortBy && validOrder;

  const { isLoading, data, isError, error } = useQuery(
    [QUERY_KEY_GET_BLACKLIST],
    () => getBlacklist(defaultSearchParams),
  );
  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  console.log('🚀 ~ data;', data);

  return <>ss</>;
};
