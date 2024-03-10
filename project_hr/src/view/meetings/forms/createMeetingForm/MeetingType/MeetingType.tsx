import { Select, MenuItem, FormHelperText } from '@mui/material';
import type { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { ModalFieldValues } from '../CreateMeetingForm';

import type { TypeOfMeetingValue } from './options';
import { typeOfMeetingOptions } from './options';

type MeetingTypeProps = {
  control: Control<ModalFieldValues>;
};

export const MeetingType = ({ control }: MeetingTypeProps) => {
  return (
    <Controller
      name="type"
      control={control}
      defaultValue="offline"
      render={({ field: { value, onChange } }) => (
        <>
          <FormHelperText>Type of Meeting</FormHelperText>
          <Select
            defaultValue="offline"
            value={value ?? 'offline'}
            onChange={(e) => onChange(e.target.value as TypeOfMeetingValue)}
          >
            {typeOfMeetingOptions.map((type) => (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    />
  );
};
