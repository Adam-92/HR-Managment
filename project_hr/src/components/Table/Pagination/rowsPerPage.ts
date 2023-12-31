export const rowsPerPage = ['10', '25', '50'] as const;

export type RowsPerPageType = (typeof rowsPerPage)[number];
