import type { FormatUserName } from '../types/types';

export const formatUserInitials: FormatUserName = (user) => {
  return user.firstName.charAt(0) + user.lastName.charAt(0);
};

export const formatOneFieldInitials = (fullName: string) => {
  const [name, surname] = fullName.split(' ');
  if (name && surname) {
    return name.charAt(0) + surname.charAt(0);
  }
  return undefined;
};
