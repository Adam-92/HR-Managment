import { Box, Typography } from '@mui/material';

import { Header } from 'components/Header/Header';

import { AboutMe } from './AboutMe';
import { ResetUsername } from './resetUsername/ResetUsername';
import { ResetPassword } from './resetPassword/ResetPassword';

export const Profile = () => (
  <>
    <Header title="Profile" />
    <Typography variant="h2" component="h2">
      Profile
    </Typography>
    <AboutMe />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <ResetPassword />
      <ResetUsername />
    </Box>
  </>
);
