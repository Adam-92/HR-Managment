export const jobColumns = [
  'id',
  'createdAt',
  'updatedAt',
  'title',
  'shortDescripption',
  'longDescription',
  'logo',
  'companyName',
  'status',
] as const;

export type JobColumnsType = typeof jobColumns;
