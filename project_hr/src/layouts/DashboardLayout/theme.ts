import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        position: 'fixed',
        sx: {
          width: { sm: `100%` },
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        sx: { justifyContent: 'space-between' },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'inherit',
        edge: 'start',
        sx: { mr: 2, display: { sm: 'none' } },
      },
    },
    MuiDrawer: {
      defaultProps: {
        variant: 'temporary',
        sx: {
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'system-ui',
  },
});
