import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import theme from './common/theme';
import createEmotionCache from './common/createEmotionCache';
import Home from '../src/pages/home';
import Marketplace from './pages/marketplace';
import CardDetails from './pages/card_details';
import AuthForm from './components/auth/AuthForm';

const emotionCache = createEmotionCache();

const router = createBrowserRouter([
  {
    path: '/marketplace',
    element: <Marketplace />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/marketplace/:productId',
    element: <CardDetails />
  },
  {
    path: '/auth',
    element: <AuthForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  </CacheProvider>
);
