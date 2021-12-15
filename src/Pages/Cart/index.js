import React, { useContext } from 'react';
import ProductItem from '../../Component/ProductItem';
import { CartContext } from '../../Context/cartContext';
import { ProductsContext } from '../../Context/productsContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  console.log(cart);

  return (
    <>
      {cart.map((x, index) => {
        const product = products.find((item) => item.id === x.productId);
        return <ProductItem key={x.id} product={product} cartItem={x} cartIndex={index} />;
      })}
    </>
  );
};

export default Cart;
