export type GetUserDataResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type FormatUserName = (user: UserInfo) => string;

type UserInfo = { firstName: string; lastName: string };
