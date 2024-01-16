import { useSearchParams } from 'react-router-dom';

import { defaultSearchParams } from 'api/blacklist/getBlacklist';

export const useBlacklistParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    take: searchParams.get('take') || defaultSearchParams.take,
    skip: searchParams.get('skip') || defaultSearchParams.skip,
    sortBy: searchParams.get('sortBy') || defaultSearchParams.sortBy,
    order: searchParams.get('order') || defaultSearchParams.order,
  };

  const currentPage = Math.ceil(
    parseInt(params.skip, 10) / parseInt(params.take, 10),
  );
  const columnsName = ['Name', 'Reason'];

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const row = event.target.value;
    setSearchParams({ ...params, take: row });
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    const newSkipForward =
      parseInt(params.skip, 10) + parseInt(params.take, 10);
    const newSkipBackward =
      parseInt(params.skip, 10) - parseInt(params.take, 10);

    if (currentPage < newPage)
      setSearchParams({
        ...params,
        skip: newSkipForward.toString(),
      });
    if (currentPage > newPage)
      setSearchParams({
        ...params,
        skip: newSkipBackward.toString(),
      });
  };

  const handleSortColumn = (columnName: string) => {
    if (params.sortBy === columnName && params.order === 'asc') {
      setSearchParams({
        ...params,
        sortBy: columnName,
        order: 'desc',
        skip: '0',
      });
    }
    if (params.sortBy === columnName && params.order === 'desc') {
      setSearchParams({
        ...params,
        sortBy: columnName,
        order: 'asc',
        skip: '0',
      });
    }
    if (params.sortBy !== columnName) {
      setSearchParams({
        ...params,
        sortBy: columnName,
        order: 'asc',
        skip: '0',
      });
    }
  };

  return {
    params,
    currentPage,
    handleChangeRowsPerPage,
    handleChangePage,
    handleSortColumn,
    columnsName,
  };
};
