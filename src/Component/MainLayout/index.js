import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from '../../Context/authContext';
import { CartContext } from '../../Context/cartContext';

const MainLayout = () => {
  const { token, removeToken } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate('/');
  };

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => {
              navigate('cart');
            }}
          >
            <CartContext.Consumer>
              {({ cart }) => {
                const badgeCount = cart.reduce((p, c) => p + c.quantity, 0);
                return (
                  <Badge badgeContent={badgeCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                );
              }}
            </CartContext.Consumer>
          </IconButton>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
