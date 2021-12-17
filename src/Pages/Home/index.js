import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../Component/ProductItem';

const Home = ({
  cart: { loadingCart, errorCart, data: cartData },
  products: { loadingProducts, errorProducts, data: productsData },
}) => {
  // const { products, loading } = useContext(ProductsContext);

  if (loadingProducts || loadingCart) {
    return <h1>Loading...</h1>;
  }

  if (errorProducts) {
    return <h1>{errorProducts.message}</h1>;
  }

  if (errorCart) {
    return <h1>{errorCart.message}</h1>;
  }

  return (
    <>
      {productsData.map((x) => {
        const cartIndex = cartData.findIndex((item) => item.productId === x.id);
        const cartItem = cartData[cartIndex];
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
});

export default connect(mapStateToProps)(Home);
