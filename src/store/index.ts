import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './root-reducer';
import rootSaga from './root-saga';
import { Middleware } from 'redux';

const developmentMiddlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger'); // eslint-disable-line

  developmentMiddlewares.push(createLogger());
}

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    createRootReducer(),
    compose(
      applyMiddleware(
        sagaMiddleware,
        ...developmentMiddlewares,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

