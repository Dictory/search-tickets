import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = (initialState) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //eslint-disable-line
  return store;
};

export default configureStore;
