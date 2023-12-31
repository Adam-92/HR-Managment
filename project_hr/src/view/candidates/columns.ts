export const columns = [
  'name',
  'position',
  'createdAt',
  'updatedAt',
  'shortDescription',
  'longDescription',
  'logo',
  'companyName',
  'appliedToJobId',
] as const;

export type CandidateColumnsType = typeof columns;
