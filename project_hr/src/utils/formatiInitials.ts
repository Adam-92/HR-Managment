import type { FormatUserName } from '../types/types';

export const formatInitials: FormatUserName = (user) => {
  return user.firstName.charAt(0) + user.lastName.charAt(0);
};
