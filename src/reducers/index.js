import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';
import userReducer from './userReducer';

export default combineReducers({ locale: localeReducer, theme: themeReducer, user: userReducer });
