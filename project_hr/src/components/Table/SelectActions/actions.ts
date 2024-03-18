export const actions = ['actions', 'delete'] as const;

export type SelectActionsValue = (typeof actions)[number];
