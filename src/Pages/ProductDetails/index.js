import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import ProductItem from '../../Component/ProductItem';
import axiosInstance from '../../utils/axiosInstance';

const ProductDetails = ({ cart }) => {
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

  const cartIndex = cart.findIndex((x) => x.productId === Number(productId));
  const cartItem = cart[cartIndex];

  if (!prod) {
    return <h1>Loading...</h1>;
  }

  return <ProductItem product={prod} cartItem={cartItem} cartIndex={cartIndex} />;
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ProductDetails);
