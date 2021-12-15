import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';
import { AuthProvider } from './Context/authContext';
import ErrorBoundary from './Component/ErrorBoundary';

import './root.css';
import store from './storeConfig';

store.dispatch({ type: 'CHANGE_THEME', payload: 'light' });

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
