export const columns = [
  'companyName',
  'createdAt',
  'longDescription',
  'shortDescription',
  'status',
  'title',
  'updatedAt',
] as const;

export type JobColumnsType = typeof columns;
