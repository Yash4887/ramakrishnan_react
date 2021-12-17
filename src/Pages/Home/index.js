import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../Component/ProductItem';

const Home = ({ cart, products, productsLoading, cartLoading, productsError, cartError }) => {
  if (productsLoading || cartLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError) {
    return <h1>{productsError.message}</h1>;
  }

  if (cartError) {
    return <h1>{cartError.message}</h1>;
  }

  return (
    <>
      {products.map((x) => {
        const cartIndex = cart.findIndex((item) => item.productId === x.id);
        const cartItem = cart[cartIndex];
        return (
          <ProductItem
            key={x.id}
            product={x}
            cartItem={cartItem}
            cartIndex={cartIndex}
            isCardClickable
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
  productsLoading: state.loading['LOAD_PRODUCTS'],
  productsError: state.error['LOAD_PRODUCTS'],
  cartLoading: state.loading['LOAD_CART'],
  cartError: state.error['LOAD_CART'],
});

export default connect(mapStateToProps)(Home);
