import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';
import { AuthContext } from '../../Context/authContext';
import { loadProductsAction } from '../../actions/productsActions';
import { loadCartAction } from '../../actions/cartActions';

const MainLayout = ({ loadProducts, loadCart, cart: { data: cartData } }) => {
  const { token, removeToken } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const logout = () => {
    removeToken();
    navigate('/');
  };

  const badgeCount = cartData.reduce((p, c) => p + c.quantity, 0);

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
            <Badge badgeContent={badgeCount} color="error">
              <ShoppingCartIcon />
            </Badge>
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

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => loadProductsAction()(dispatch),
  loadCart: () => loadCartAction()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
