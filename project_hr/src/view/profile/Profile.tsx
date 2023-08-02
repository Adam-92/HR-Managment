import { Box, Typography } from '@mui/material';

import { AboutMe } from './AboutMe';
import { ResetPassword } from './ResetPassword/ResetPassword';
import { ResetUserName } from './ResetUserName/ResetUserName';

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
        <ResetUserName />
      </Box>
    </>
  );
};
