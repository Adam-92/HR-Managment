import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useUser } from 'api/getUser/useUser';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';

export const AboutMe = () => {
  const results = useUser();

  return (
    <DataStatusHandler {...results}>
      {(data) => (
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
      )}
    </DataStatusHandler>
  );
};
