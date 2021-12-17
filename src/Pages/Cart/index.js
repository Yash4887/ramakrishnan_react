import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../Component/ProductItem';

const Cart = ({ cart, products }) => (
  <>
    {cart.map((x, index) => {
      const product = products.find((item) => item.id === x.productId);
      return <ProductItem key={x.id} product={product} cartItem={x} cartIndex={index} />;
    })}
  </>
);

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.products,
});

export default connect(mapStateToProps)(Cart);
