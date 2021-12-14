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
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import { ProductsContext } from '../../Context/productsContext';

const Home = () => {
  const { cart, addToCart, deleteFromCart, updateQuantity } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const navigate = useNavigate();

  return (
    <>
      {products.map((x) => {
        const cartIndex = cart.findIndex((item) => item.productId === x.id);
        const cartItem = cart[cartIndex];
        return (
          <Card
            key={x.id}
            sx={{ display: 'flex', m: 2 }}
            onClick={() => {
              navigate(`${x.id}`, {
                state: {
                  product: x,
                  cartItem,
                  cartIndex,
                },
              });
            }}
          >
            <CardMedia component="img" sx={{ width: 151 }} image={x.image} alt={x.title} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {x.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {x.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating name="simple-controlled" value={x.rating.rate} precision={0.5} readOnly />
                  <Box sx={{ ml: 2 }}>{`(${x.rating.count})`}</Box>
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
                      addToCart(x);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default Home;
