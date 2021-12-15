import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import { ProductsContext } from '../../Context/productsContext';
import ProductItem from '../../Component/ProductItem';

const Home = () => {
  const { cart, cartState } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  if (!(cart || products)) {
    return <h1>Data is not available</h1>;
  }

  if (cartState.some((x) => x.type === 'LOAD_CART' && x.status === 'REQUEST')) {
    return <h1>Loading....</h1>;
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

export default Home;
