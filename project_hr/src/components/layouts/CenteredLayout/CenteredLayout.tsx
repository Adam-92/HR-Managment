import { Outlet } from 'react-router-dom';
import { Container, Card, CardContent } from '@mui/material';

export const CenteredLayout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </Container>
  );
};
