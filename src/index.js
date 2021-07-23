import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Helmet } from 'react-helmet';

import './index.css';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Clock App</title>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </Helmet>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
);
