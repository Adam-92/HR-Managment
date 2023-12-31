export const actions = ['Actions', 'Delete'] as const;

export type SelectActionsValue = (typeof actions)[number];
