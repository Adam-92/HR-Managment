import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { router } from 'routing/Router';
import { AppProviders } from 'appProviders/AppProviders';

import { reportWebVitals } from './reportWebVitals';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(`Expected root element with id "root"`);
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
