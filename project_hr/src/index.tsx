import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './i18n';
import './index.css';
import { CssBaseline } from '@mui/material';

import { router } from 'routing/Router';
import { AppProviders } from 'providers/appProviders/AppProviders';

import { reportWebVitals } from './reportWebVitals';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(`Expected root element with id "root"`);
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <AppProviders>
    <CssBaseline />
    <RouterProvider router={router} />
  </AppProviders>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
