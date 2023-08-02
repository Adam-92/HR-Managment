import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';

import type { AppProvidersProps } from './AppProviders.types';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <SnackbarProvider maxSnack={1} autoHideDuration={1500}>
          {children}
        </SnackbarProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};
