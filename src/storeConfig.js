import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from './middlewares/middleware';

const middlewares = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 3. Create a store.
// 4. Add root reducer as first parameter
// 5. Apply appropriate middleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
