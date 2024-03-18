import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

export const rules = {
  required: 'Please select the date',
  validate: {
    isValidDate: (value: Dayjs | string) =>
      dayjs(value).isValid() || 'Invalid date and time',
    onlyFutureDates: (value: Dayjs | string) =>
      dayjs(value).isSame(dayjs(), 'day') ||
      dayjs(value).isAfter(dayjs()) ||
      "Select today's or future date",
    isBeforeMaxDate: (value: Dayjs | string) =>
      dayjs(value).isBefore(dayjs(new Date(2024, 11, 31))) ||
      'Date must be before 2025',
  },
};
