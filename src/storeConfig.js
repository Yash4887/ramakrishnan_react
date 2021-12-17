import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from './middlewares/middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

export default store;
