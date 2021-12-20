import PropTypes from 'prop-types';

export const cartPropTypes = PropTypes.arrayOf(
  PropTypes.exact({
    productId: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number.isRequired,
  }).isRequired,
);

export const productsPropTypes = PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.exact({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
);
