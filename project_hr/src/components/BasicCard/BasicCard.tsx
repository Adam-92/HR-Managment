import { Card, CardContent, Typography } from '@mui/material';
import CountUp from 'react-countup';

type BasicCardProps = {
  text: string;
  data: unknown[];
};

export const BasicCard = ({ text, data }: BasicCardProps) => {
  return (
    <Card sx={{ minWidth: 260, mr: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {text}
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="text.success" gutterBottom>
          <CountUp end={data.length} duration={3} />
        </Typography>
      </CardContent>
    </Card>
  );
};
