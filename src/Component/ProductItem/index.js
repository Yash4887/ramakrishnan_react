import { LoadingButton } from '@mui/lab';
import { Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import {
  addCartItemAction,
  deleteCartItemAction,
  updateCartItemAction,
} from '../../actions/cartActions';

const ProductItem = ({
  product,
  cartItem,
  cartIndex,
  isCardClickable,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  cart: { data: cartState },
}) => {
  // const { cartState, addToCart, deleteFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Card
      key={product.id}
      sx={{ display: 'flex', m: 2 }}
      onClick={
        isCardClickable
          ? () => {
              navigate(`${product.id}`, {
                state: {
                  product,
                  cartItem,
                  cartIndex,
                },
              });
            }
          : () => {}
      }
    >
      <CardMedia component="img" sx={{ width: 151 }} image={product.image} alt={product.title} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="simple-controlled" value={product.rating.rate} precision={0.5} readOnly />
            <Box sx={{ ml: 2 }}>{`(${product.rating.count})`}</Box>
          </Box>
          {cartItem ? (
            <CardActions>
              <Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
                <LoadingButton
                  variant="outlined"
                  loading={cartState.some(
                    (item) =>
                      item.type === 'UPDATE_CART' &&
                      item.status === 'REQUEST' &&
                      item.productId === product.id &&
                      item.cartId === cartItem.id,
                  )}
                  onClick={(event) => {
                    event.stopPropagation();
                    updateCartItem(cartItem, 1);
                  }}
                >
                  +
                </LoadingButton>
                <Typography component="div" variant="h5" mx={3}>
                  {cartItem.quantity}
                </Typography>
                <LoadingButton
                  variant="outlined"
                  loading={cartState.some(
                    (item) =>
                      item.type === (cartItem.quantity <= 1 ? 'DELETE_CART' : 'UPDATE_CART') &&
                      item.status === 'REQUEST' &&
                      item.productId === (cartItem.quantity <= 1 ? -1 : product.id) &&
                      item.cartId === cartItem.id,
                  )}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (cartItem.quantity <= 1) {
                      deleteCartItem(cartItem);
                    } else {
                      updateCartItem(cartItem, -1);
                    }
                  }}
                >
                  -
                </LoadingButton>
              </Box>
            </CardActions>
          ) : (
            <LoadingButton
              variant="contained"
              loading={cartState.some(
                (item) =>
                  item.type === 'ADD_CART' &&
                  item.status === 'REQUEST' &&
                  item.productId === product.id,
              )}
              sx={{ mt: 2 }}
              onClick={(event) => {
                event.stopPropagation();
                addCartItem(product);
              }}
            >
              Add to Cart
            </LoadingButton>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
  cartItem: PropTypes.shape({
    productId: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number,
  }),
  cartIndex: PropTypes.number.isRequired,
  isCardClickable: PropTypes.bool,
};

ProductItem.defaultProps = {
  isCardClickable: false,
  cartItem: null,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => addCartItemAction(item)(dispatch),
  updateCartItem: (item, quantity) => updateCartItemAction(item, quantity)(dispatch),
  deleteCartItem: (item) => deleteCartItemAction(item)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
