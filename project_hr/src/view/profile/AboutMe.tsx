import { Alert, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useUser } from 'api/getUser/hook/useUser';
import { parseError } from 'errors/parseError';

export const AboutMe = () => {
  const { data, isLoading, isError, error } = useUser();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  return (
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
  );
};
