export type SortQuery = {
  sort?: string;
};

export type UseSortProps = {
  sortedData: any[];
  getSortQueryParam: (sortBy: string) => SortQuery;
};
