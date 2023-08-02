import { isAxiosError } from 'axios';

type ErrorWithMessage = {
  message: string;
};

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export const parseError = (error: unknown) => {
  if (isAxiosError(error)) {
    const maybeErrorResonseData = error.response?.data;
    if (isErrorWithMessage(maybeErrorResonseData)) {
      return maybeErrorResonseData.message;
    }
  }
  if (isErrorWithMessage(error)) {
    return error.message;
  }

  return 'Something went wrong.';
};
