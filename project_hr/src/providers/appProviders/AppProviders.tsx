import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';

import type { AppProvidersProps } from './AppProviders.types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfirmProvider>
        <HelmetProvider>
          <SnackbarProvider maxSnack={1} autoHideDuration={1500}>
            {children}
          </SnackbarProvider>
        </HelmetProvider>
      </ConfirmProvider>
    </QueryClientProvider>
  );
};
