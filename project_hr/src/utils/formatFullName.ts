import type { FormatUserName } from '@types/types';

export const formatFullName: FormatUserName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};
