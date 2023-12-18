import { useState } from 'react';
import { TextField, InputAdornment, ListItemIcon } from '@mui/material';
import { Clear } from '@mui/icons-material';

import { useTable } from 'providers/table/useTable';

export const Search = () => {
  const { search } = useTable();
  const [isClearIcon, setIsClearIcon] = useState(false);

  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={search.value}
      onChange={search.handleChange}
      onMouseOver={() => setIsClearIcon(true)}
      onMouseOut={() => setIsClearIcon(false)}
      style={{ position: 'relative' }}
      InputProps={{
        endAdornment: search.value && isClearIcon && (
          <InputAdornment
            position="end"
            style={{ position: 'absolute', top: 15, right: -30 }}
          >
            <ListItemIcon
              onClick={search.clearValue}
              style={{ cursor: 'pointer' }}
            >
              <Clear fontSize="small" />
            </ListItemIcon>
          </InputAdornment>
        ),
      }}
    />
  );
};
