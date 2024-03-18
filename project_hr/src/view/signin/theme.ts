import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        margin: 'normal',
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiAvatar: {
      defaultProps: {
        sx: { m: 1, bgcolor: 'secondary.main' },
      },
    },
    MuiLink: {
      defaultProps: {
        sx: { display: 'block', textAlign: 'center' },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: { mt: 3, mb: 2 },
        type: 'submit',
        fullWidth: true,
      },
    },
    MuiCardContent: {
      defaultProps: {
        sx: { padding: 0 },
      },
    },
  },
});

export const sxFlexBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
