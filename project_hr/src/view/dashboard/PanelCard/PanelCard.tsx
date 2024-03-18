import { Card, CardContent, Typography, SvgIcon, Link } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type BasicCardProps = {
  route: string;
  text: string;
  icon: SvgIconComponent;
  data?: unknown[];
};

export const PanelCard = ({ text, data, icon, route }: BasicCardProps) => {
  const { t } = useTranslation();
  return (
    <Link href={route}>
      <Card>
        <CardContent>
          <Typography>{text}</Typography>
          <SvgIcon component={icon} />
          <Typography>{data?.length}</Typography>
          <Typography className={`${!data && 'pt'}`}>
            {t('dashboard.panel')}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
