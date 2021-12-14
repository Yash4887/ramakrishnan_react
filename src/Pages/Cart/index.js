import { Button, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import { ProductsContext } from '../../Context/productsContext';

const Cart = () => {
  const { cart, deleteFromCart, updateQuantity } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  console.log(cart);

  return (
    <>
      {cart.map((x, index) => {
        const product = products.find((item) => item.id === x.productId);
        return (
          <Card key={x.id} sx={{ display: 'flex', m: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={product.image}
              alt={product.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating
                    name="simple-controlled"
                    value={product.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <Box sx={{ ml: 2 }}>{`(${product.rating.count})`}</Box>
                </Box>
                <Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
                  <Button variant="outlined" onClick={() => updateQuantity(index, 1)}>
                    +
                  </Button>
                  <Typography component="div" variant="h5" mx={3}>
                    {x.quantity}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      if (x.quantity <= 1) {
                        deleteFromCart(x.id, index);
                      } else {
                        updateQuantity(index, -1);
                      }
                    }}
                  >
                    -
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default Cart;
