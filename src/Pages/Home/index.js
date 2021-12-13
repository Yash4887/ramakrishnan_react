import { Button, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axiosInstance.get('660/products');
        setProducts(res.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProductData();
  }, []);

  return (
    <>
      {products.map((x) => (
        <Card sx={{ display: 'flex', m: 2 }}>
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
              <Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
                <Button variant="outlined">+</Button>
                <Typography component="div" variant="h5" mx={3}>
                  {1}
                </Typography>
                <Button variant="outlined">-</Button>
              </Box>
              <Button variant="contained">Add to Cart</Button>
            </CardContent>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default Home;
