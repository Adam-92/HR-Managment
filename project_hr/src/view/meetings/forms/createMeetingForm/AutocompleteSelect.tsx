import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

import type { AutocompleteData } from 'types/types';

import type { ModalFieldValues } from './CreateMeetingForm';

type AutocompleteProps = {
  name: 'job' | 'candidate';
  control: Control<ModalFieldValues>;
  data: AutocompleteData;
};

export const AutocompleteSelect = ({
  name,
  data,
  control,
}: AutocompleteProps) => {
  const options = data.map((item) => item.label);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: `Please select ${name}` }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <Autocomplete
            value={value ?? ''}
            onChange={(event, newValue) => onChange(newValue ?? '')}
            onBlur={onBlur}
            options={[...options, '']}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label={`Select ${name}`}
                  error={!!error}
                  helperText={error?.message}
                />
              );
            }}
          />
        );
      }}
    />
  );
};
