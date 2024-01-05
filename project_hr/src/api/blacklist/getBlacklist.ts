import { axios } from '../../axios/axios';

type BlacklistData = {
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
  sortBy: 'name' | 'reason';
  order: 'asc' | 'desc';
  take: number;
  skip: number;
};

export const defaultSearchParams: ParamBlacklist = {
  take: 10,
  skip: 0,
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
