import { Card, CardContent, Typography, List, ListItem } from '@mui/material';
import CountUp from 'react-countup';

type WideCardProps = {
  data: unknown[];
};

export const WideCard = ({ data }: WideCardProps) => {
  return (
    <Card sx={{ minWidth: 550, mt: 10 }}>
      <CardContent>
        <Typography variant="h4" component="h4" sx={{ mt: 5 }}>
          General
        </Typography>
        <Typography variant="h5" component="h5" sx={{ mt: 5 }}>
          Total 48.5% growth this month
        </Typography>
        <List sx={{ display: 'flex' }}>
          <ListItem>
            Employees:
            <Typography sx={{ fontSize: 24, ml: 3 }}>
              <CountUp end={245} />K
            </Typography>
          </ListItem>
          <ListItem>
            Candidates:
            <Typography sx={{ fontSize: 24, ml: 3 }}>
              <CountUp end={data.length} />
            </Typography>
          </ListItem>
          <ListItem>
            Employees:
            <Typography sx={{ fontSize: 24, ml: 3 }}>
              <CountUp end={245} />K
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
