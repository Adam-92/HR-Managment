export type SortQuery = {
  sort?: string;
};

export type UseSortProps = {
  getSortedData: (data: any[]) => any[];
  getSortQueryParam: (sortBy: string) => SortQuery;
};
