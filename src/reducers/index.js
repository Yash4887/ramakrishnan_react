import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
