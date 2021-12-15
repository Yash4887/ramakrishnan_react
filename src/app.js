import { SnackbarProvider } from 'notistack';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/cartContext';
import { ProductsProvider } from './Context/productsContext';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';

const AsyncAuthLayout = lazy(() => import('./Component/AuthLayout'));
const AsyncHome = lazy(() => import('./Pages/Home'));
const AsyncLogin = lazy(() => import('./Pages/Login'));
const AsyncRegister = lazy(() => import('./Pages/Register'));
const AsyncMainLayout = lazy(() => import('./Component/MainLayout'));

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
      path="/main"
      element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <SnackbarProvider maxSnack={3}>
            <ProductsProvider>
              <CartProvider>
                <AsyncMainLayout />
              </CartProvider>
            </ProductsProvider>
          </SnackbarProvider>
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <AsyncHome />
          </Suspense>
        }
      />
      <Route path=":productId" element={<ProductDetails />} />

      <Route path="cart" element={<Cart />} />
    </Route>
  </Routes>
);

export default App;
