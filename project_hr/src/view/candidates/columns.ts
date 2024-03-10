export const columns = [
  'name',
  '',
  'position',
  'companyName',
  'createdAt',
  'updatedAt',
  'shortDescription',
  'longDescription',
] as const;

export type CandidateColumnsType = typeof columns;
