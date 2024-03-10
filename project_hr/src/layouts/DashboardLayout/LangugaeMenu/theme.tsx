import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'text',
        sx: { width: 10 },
      },
    },
    MuiListItemIcon: {
      defaultProps: {
        sx: { minWidth: 35 },
      },
    },
  },
});
