import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { AuthProvider } from './Context/authContext';
// import AppHook from './AppHook';

import './root.css';

// Rule1: First Letter of Component should always Capital
// Rule2: We can return single element from component
// Rule3: Replace class with className(class is reserve keyword in javascript)
// Rule4: apply style as a object and style name should be in camelcase

// Create Virtual DOM from provided HTML
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root'),
);
