import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../Component/ProductItem';
import { cartPropTypes, productsPropTypes } from '../../constants/propTypesConstant';

const Cart = ({ cart, products }) => (
  <>
    {cart.map((x, index) => {
      const product = products.find((item) => item.id === x.productId);
      return <ProductItem key={x.id} product={product} cartItem={x} cartIndex={index} />;
    })}
  </>
);

Cart.propTypes = {
  cart: cartPropTypes.isRequired,
  products: productsPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.products,
});

export default connect(mapStateToProps)(Cart);
