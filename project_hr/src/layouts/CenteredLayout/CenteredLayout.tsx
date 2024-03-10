import { Outlet } from 'react-router-dom';
import { Container, Card, CardContent, ThemeProvider } from '@mui/material';

import { theme } from './theme';

export const CenteredLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card>
          <CardContent>
            <Outlet />
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};
