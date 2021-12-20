import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import logger from './middlewares/middleware';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 3. Create a store.
// 4. Add root reducer as first parameter
// 5. Apply appropriate middleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSagas);

export default store;
