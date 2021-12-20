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
  isAddCartLoading,
  isUpdateCartLoading,
  isDeleteCartLoading,
}) => {
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
                  loading={isUpdateCartLoading}
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
                  loading={cartItem.quantity <= 1 ? isDeleteCartLoading : isUpdateCartLoading}
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
              loading={isAddCartLoading}
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
  addCartItem: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  cartIndex: PropTypes.number.isRequired,
  isCardClickable: PropTypes.bool,
  isAddCartLoading: PropTypes.bool.isRequired,
  isUpdateCartLoading: PropTypes.bool.isRequired,
  isDeleteCartLoading: PropTypes.bool.isRequired,
};

ProductItem.defaultProps = {
  isCardClickable: false,
  cartItem: null,
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    cart: state.cart,
    isAddCartLoading: !!state.loading[`ADD_CART_ITEM_${props?.product?.id}`],
    isUpdateCartLoading: !!state.loading[`UPDATE_CART_ITEM_${props?.cartItem?.id}`],
    isDeleteCartLoading: !!state.loading[`DELETE_CART_ITEM_${props?.cartItem?.id}`],
  };
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => addCartItemAction(item)(dispatch),
  updateCartItem: (item, quantity) => updateCartItemAction(item, quantity)(dispatch),
  deleteCartItem: (item) => deleteCartItemAction(item)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
