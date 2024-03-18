import React from 'react';
import type { Control, UseFormWatch } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import type { ModalFieldValues } from '../CreateMeetingForm';

import { regex } from './validation';

type PlaceProps = {
  control: Control<ModalFieldValues>;
  watch: UseFormWatch<ModalFieldValues>;
};

export const Place = ({ control, watch }: PlaceProps) => {
  const meetingType = watch('type');
  const label = meetingType === 'online' ? 'URL' : 'Place';
  return (
    <Controller
      name="place"
      control={control}
      rules={{
        required: 'This field is required',
        validate: (value) => {
          if (meetingType === 'online') {
            // URL validation
            return regex.test(value) || 'Please enter a valid URL';
          }
          // String validation for 'offline'
          return value.length >= 5 || 'Please enter at least 5 characters';
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextField
          sx={{ ml: '1rem' }}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          label={label}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
