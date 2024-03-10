import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minWidth: 300,
          minHeight: 200,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: { fontFamily: 'system-ui' },
        gutterBottom: true,
        fontWeight: '700',
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          fontSize: '4rem',
        },
      },
    },
  },
});
