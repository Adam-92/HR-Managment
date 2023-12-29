export const columns = [
  'companyName',
  'createdAt',
  'logo',
  'longDescription',
  'shortDescription',
  'status',
  'title',
  'updatedAt',
] as const;

export type JobColumnsType = typeof columns;
