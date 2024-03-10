import dayjs from 'dayjs';
import {
  LocalizationProvider,
  DateTimePicker as ResponsiveDateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { ModalFieldValues } from '../CreateMeetingForm';

import { rules } from './validation';

export type DateTimePickerProps = {
  control: Control<ModalFieldValues>;
};

export const DateTimePicker = ({ control }: DateTimePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name="date"
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <ResponsiveDateTimePicker
              value={value ?? ''}
              onChange={(newValue) => onChange(newValue ?? dayjs())}
              label="Date and Time"
              disablePast
              maxDate={dayjs(new Date(2024, 11, 31))}
              slotProps={{
                textField: {
                  error: !!error,
                  helperText: error?.message,
                },
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};
