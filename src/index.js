import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// 1. Added Provider
import { Provider } from 'react-redux';
import App from './app';
import { AuthProvider } from './Context/authContext';
import ErrorBoundary from './Component/ErrorBoundary';

import './root.css';
import store from './storeConfig';

// 2. Wrap App with Provider which require store as prop
ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById('root'),
);
