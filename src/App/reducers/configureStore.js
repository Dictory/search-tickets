import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = (initialState) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // if (module.hot) {
  //   module.hot.accept('./rootReducer', () => {
  //     const nextRootReducer = require('./rootReducer').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
};

export default configureStore;
