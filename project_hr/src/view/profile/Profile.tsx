import { Box, Typography } from '@mui/material';

import { AboutMe } from './AboutMe';
import { ResetPassword } from './resetPassword/ResetPassword';
// eslint-disable-next-line import/no-unresolved
import { ResetUsername } from './resetUsername/ResetUsername';

export const Profile = () => {
  return (
    <>
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
};
