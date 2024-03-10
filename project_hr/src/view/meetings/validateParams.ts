import type { ParamsMeetings } from 'api/meetings/getMeetings';

export const validateParams = (params: ParamsMeetings) => {
  const error: string[] = [];

  if (parseInt(params.year, 10) < 2022) {
    error.push('The year in url cannot be less than 2022');
  }

  if (parseInt(params.month, 10) < 1 || parseInt(params.month, 10) > 12) {
    error.push('The month in url cannot be less than 1, or greater than 12');
  }

  if (
    Number.isNaN(parseInt(params.month, 10)) ||
    Number.isNaN(parseInt(params.year, 10))
  ) {
    error.push(
      'The months or years in url can be only a numbers. For example month=1,is January',
    );
  }

  return error;
};
