import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'routing/Routes';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1">
        404: The page you are looking for isn’t here
      </Typography>
      <Typography variant="subtitle1">
        You might have the wrong address, or the page may have moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(Routes.dashboard)}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};
