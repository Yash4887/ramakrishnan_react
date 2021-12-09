import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const AsyncAuthLayout = lazy(() => import('./Component/AuthLayout'));
const AsyncHome = lazy(() => import('./Pages/Home'));
const AsyncLogin = lazy(() => import('./Pages/Login'));
const AsyncRegister = lazy(() => import('./Pages/Register'));

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <AsyncAuthLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <AsyncLogin />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <AsyncRegister />
          </Suspense>
        }
      />
    </Route>
    <Route
      path="/home"
      element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <AsyncHome />
        </Suspense>
      }
    />
  </Routes>
);

export default App;
