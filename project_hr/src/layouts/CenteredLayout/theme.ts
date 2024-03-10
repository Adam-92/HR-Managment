import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
        sx: {
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          minWidth: 275,
        },
      },
    },
  },
});
