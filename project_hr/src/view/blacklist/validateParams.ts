import { type ParamBlacklist } from 'api/blacklist/getBlacklist';

export const validateParams = (params: ParamBlacklist) => {
  const error: string[] = [];

  if (Number.isNaN(params.skip) || Number.isNaN(params.take)) {
    error.push('Skip and Take params must be a numbers');
  }
  if (parseInt(params.take, 10) > 20 || parseInt(params.take, 10) < 5) {
    error.push('Take param must be set between 5 and 20');
  }

  if (parseInt(params.skip, 10) < 0) {
    error.push('Skip param cant be less than 0');
  }
  if (params.sortBy !== 'name' && params.sortBy !== 'reason') {
    error.push('Sort by param must be name or reason');
  }
  if (params.order !== 'asc' && params.order !== 'desc') {
    error.push('Order param must be asc or desc');
  }

  return error;
};
