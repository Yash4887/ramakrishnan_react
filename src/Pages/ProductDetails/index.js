import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import axiosInstance from '../../utils/axiosInstance';

const ProductDetails = () => {
  const { productId } = useParams();
  const { state } = useLocation();

  const [prod, setProd] = useState(state?.product);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axiosInstance.get(`660/products/${productId}`);
        setProd(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (!state?.product) {
      loadProduct();
    }
  }, [productId, state?.product]);

  const { cart, updateQuantity, deleteFromCart, addToCart } = useContext(CartContext);

  const cartIndex = cart.findIndex((x) => x.productId === Number(productId));
  const cartItem = cart[cartIndex];

  if (!prod) {
    return <h1>Loading...</h1>;
  }

  return (
    <Card key={prod.id} sx={{ display: 'flex', m: 2 }}>
      <CardMedia component="img" sx={{ width: 151 }} image={prod.image} alt={prod.title} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {prod.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {prod.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="simple-controlled" value={prod.rating.rate} precision={0.5} readOnly />
            <Box sx={{ ml: 2 }}>{`(${prod.rating.count})`}</Box>
          </Box>
          {cartItem ? (
            <CardActions>
              <Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={(event) => {
                    event.stopPropagation();
                    updateQuantity(cartIndex, 1);
                  }}
                >
                  +
                </Button>
                <Typography component="div" variant="h5" mx={3}>
                  {cartItem.quantity}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (cartItem.quantity <= 1) {
                      deleteFromCart(cartItem.id, cartIndex);
                    } else {
                      updateQuantity(cartIndex, -1);
                    }
                  }}
                >
                  -
                </Button>
              </Box>
            </CardActions>
          ) : (
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={(event) => {
                event.stopPropagation();
                addToCart(prod);
              }}
            >
              Add to Cart
            </Button>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductDetails;
