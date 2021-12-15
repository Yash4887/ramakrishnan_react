import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';

export default combineReducers({ locale: localeReducer, theme: themeReducer });
