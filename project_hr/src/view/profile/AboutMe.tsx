import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Alert,
} from '@mui/material';

import { useUser } from 'api/getUser/useUser';
import { Header } from 'components/Header/Header';
import { parseError } from 'errors/parseError';

export const AboutMe = () => {
  const { isError, isLoading, error, data } = useUser();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="error">{parseError(error)}</Alert>;
  }

  return (
    <>
      <Header title="About Me" />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
            Your name: {data.firstName}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.primary">
            Your last name: {data.lastName}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.primary">
            Your email: {data.email}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
