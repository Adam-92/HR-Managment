import { axios } from '../../axios/axios';

export type BlacklistData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  reason: string;
};

export type Blacklist = {
  data: BlacklistData[];
  count: number;
};

export type ParamBlacklist = {
  sortBy: string;
  order: string;
  take: string;
  skip: string;
};

export const defaultSearchParams = {
  take: '5',
  skip: '0',
  sortBy: 'name',
  order: 'asc',
};

export const QUERY_KEY_GET_BLACKLIST = 'getBlacklist';

export const getBlacklist = async (searchParams: ParamBlacklist) => {
  const { data } = await axios.get<Blacklist>(
    `/blacklist/candidates?take=${searchParams.take}&skip=${searchParams.skip}&sortBy=${searchParams.sortBy}&order=${searchParams.order}`,
  );
  return data;
};
