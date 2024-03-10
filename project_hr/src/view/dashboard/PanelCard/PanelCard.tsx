import { Card, CardContent, Typography, SvgIcon, Link } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import '../style/style.css';

type BasicCardProps = {
  route: string;
  text: string;
  icon: SvgIconComponent;
  data?: unknown[];
};

export const PanelCard = ({ text, data, icon, route }: BasicCardProps) => {
  return (
    <Link href={route}>
      <Card>
        <CardContent>
          <Typography>{text}</Typography>
          <SvgIcon component={icon} />
          <Typography>{data?.length}</Typography>
          <Typography className={`${!data && 'pt'}`}>
            Go to the module:
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
