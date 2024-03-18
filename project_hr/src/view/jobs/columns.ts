export const columns = [
  'title',
  'companyName',
  'createdAt',
  'updatedAt',
  'status',
  'shortDescription',
  'longDescription',
] as const;

export type JobColumnsType = typeof columns;
